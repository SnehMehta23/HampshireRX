import { medicationSchema } from "~/server/models/medication.schema";

export default defineEventHandler(async (event) => {
  try {
    const MED_LIST = await medicationSchema.find({}).select("name");
    return {
      statusCode: 200,
      body: MED_LIST,
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      message: error.message,
    };
  }
});
