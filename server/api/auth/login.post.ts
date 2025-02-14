import {userSchema} from "~/server/models/user.schema";
import bcrypt from "bcryptjs";
import {setAuth} from "~/server/utils/auth";

export default defineEventHandler(async (event) => {
    try {
        const {email, password} = await readBody(event)
        if(!email || !password){
            throw new Error("Email or password is missing")
        }
        const user = await userSchema.findOne({email})
        if(!user){
            throw new Error("User not found")
        }
        console.log(user.password)
        const matches = bcrypt.compareSync(password, user.password)
        if(!matches){
            throw new Error("Password is incorrect")
        }
        await setAuth(event, user.email)
        return {
            loggedIn: true,
            user: user.email as string
        }

    } catch (error:any) {
        return {
            statusCode: 500,
            message: error.message
        }
    }

})
