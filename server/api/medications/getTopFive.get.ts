import { settingsSchema } from "~/server/models/settings.schema";

export default defineEventHandler(async (event) => {
  try {
    const topMedications = await settingsSchema.find({});
    return {
      statusCode: 200,
      body: topMedications,
    };
  } catch (error: any) {
    console.error(error);
    return {
      statusCode: 500,
      message: error.message,
    };
  }
});
