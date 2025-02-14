import { medSchema } from "~/server/models/med.schema";
import { medicationSchema } from "~/server/models/medication.schema";

export default defineEventHandler(async (event) => {
  try {
    return await medicationSchema.find({});
  } catch (error: any) {
    return {
      statusCode: 500,
      message: error.message,
    };
  }
});
