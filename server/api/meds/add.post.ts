import {medSchema} from "~/server/models/med.schema";

export default defineEventHandler(async (event) => {
        try{
            const {name, size, count, countUnit, genericFor, price} = await readBody(event)
            const med = await medSchema.create({name, size, count, countUnit, genericFor, price})
            await med.save();
            return {
                status: 200,
                body: med
            }
        } catch (e:any) {
            return {
                status: 500,
                body: e.message
            }
        }
})





