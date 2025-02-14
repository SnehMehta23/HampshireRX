import { medicationSchema } from "~/server/models/medication.schema";

export default defineEventHandler(async (event) => {
  try {
    const { name, options } = await readBody(event);
    const med = await medicationSchema.create({
      name,
      options,
    });
    await med.save();
    return {
      status: 200,
      body: med,
    };
  } catch (e: any) {
    return {
      status: 500,
      body: e.message,
    };
  }
});
