import {medSchema} from "~/server/models/med.schema";

export default defineEventHandler(async (event) =>{
    try{
        return await medSchema.find({})
    }catch(error: any){
        return{
            statusCode: 500,
            message: error.message,
        }
    }
})
