import { settingsSchema } from "~/server/models/settings.schema";

export default defineEventHandler(async (event) => {
  try {
    const { meds } = await readBody(event);
    const setting = await settingsSchema.create({
      topMedications: meds,
    });
    return {
      statusCode: 200,
      body: setting,
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
});
