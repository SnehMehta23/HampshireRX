import bcrypt from "bcryptjs";

export default defineEventHandler(async(event) => {
    try{
        const {email,password, ...rest} = await readBody(event)
        const hashedPassword = bcrypt.hashSync(password, 10)
        const existingUser = await userSchema.findOne({email})
        if (existingUser) {
            throw new Error("User already exists")
        }
        await userSchema.create({email,password:hashedPassword, ...rest})
        return {
            registered: true,
            user: email as string
        }


    }catch(error:any){
        return{
            statusCode:500,
            message:error.message,
        }
    }
})
