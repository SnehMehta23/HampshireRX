import { settingsSchema } from "~/server/models/settings.schema";

export default defineEventHandler(async (event) => {
  try {
    const { topMedications } = await readBody(event);
    console.log(topMedications);
    const meds = await settingsSchema.findOneAndUpdate(
      {},
      { $set: { topMedications: topMedications } },
      { upsert: true, new: true },
    );
    return {
      statusCode: 200,
      body: meds,
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: error.message,
    };
  }
});
