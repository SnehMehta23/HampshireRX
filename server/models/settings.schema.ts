import { defineMongooseModel } from "#nuxt/mongoose";

export const settingsSchema = defineMongooseModel({
  name: "Setting",
  schema: {
    topMedications: [
      {
        name: "string",
        index: "number",
      },
    ],
  },
});
