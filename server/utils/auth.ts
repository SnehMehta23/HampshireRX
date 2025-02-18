import {H3Event} from "h3";
import {_useSession} from "~/server/utils/session";
import {verifyToken} from "~/server/utils/jwt";

export async function setAuth(event: H3Even, email: string) {
    const token = await createJWT(email)
    return await _useSession(event,token, email)
}

export async function getAuth(event: H3Event) {
    return(await _useSession(event)).data.email
}

export async function clearAuth(event: H3Event) {
    return (await _useSession(event)).clear()
}

export async function requireAuth(event: H3Event) {
    try{
        const token = (await _useSession(event)).data.token
        if(!token){
            throw createError({
              statusCode: 408,
              statusText: 'Unauthorized',
            })
        }
        return verifyToken(token)

    } catch (e: any) {
        return{
            statusCode: 408,
            statusText: 'Unauthorized',
        }
    }
}
