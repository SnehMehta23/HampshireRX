export default defineEventHandler(async (event) =>{
    try{
        const {id, ...updateArgs} = await readBody(event)
        const updatedMed = await medSchema.findByIdAndUpdate(id, updateArgs, {new: true})
        return {
            statusCode: 200,
            body: updatedMed,
        }
    }catch(e: any){
        return {
            statusCode: 500,
            error: e.message
        }
    }
})
