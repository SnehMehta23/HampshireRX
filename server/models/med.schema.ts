import {defineMongooseModel} from "#nuxt/mongoose";

export const medSchema = defineMongooseModel({
    name: 'Med',
    schema: {
        name: 'string',
        size: 'string',
        count: 'number',
        countUnit: 'string',
        genericFor: 'string',
        price: 'string'
    }
});