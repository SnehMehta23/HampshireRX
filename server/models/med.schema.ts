import { defineMongooseModel } from "#nuxt/mongoose";

export const medSchema = defineMongooseModel({
  name: "Med",
  schema: {
    name: "string",
    options: [
      {
        _id: "string",
        size: "string",
        count: "number",
        countUnit: "string",
        genericFor: "string",
        price: "string",
      },
    ],
  },
});
