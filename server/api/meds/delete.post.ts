import {medSchema} from "~/server/models/med.schema";

export default defineEventHandler(async (event) => {
        try{
            const {id} = await readBody(event)
            const deletedMed = await medSchema.findOneAndDelete({ _id: id }, {})
            return{
                statusCode: 200,
                body: deletedMed,
            }

        }catch(error:any){
            return{
                statusCode:500,
                message:error.message,
            }
        }
})
