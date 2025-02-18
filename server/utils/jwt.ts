import jwt from "jsonwebtoken";

const {mongo} = useRuntimeConfig().auth
const temp :string = 'spring-winter'

const JWT_SECRET = new TextEncoder().encode(mongo.secret)

export async function createJWT(email:string) {
    return jwt.sign({email}, temp, {
        expiresIn: 172800,
    })
}

export function verifyToken(token:string) {
    jwt.verify(token, temp, (error:any, decoded:any) => {
        if (error) {
            throw createError({statusCode: 401,statusMessage: 'Invalid token'})
        }

        return 'OK'
    });
}


