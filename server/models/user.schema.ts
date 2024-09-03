import {defineMongooseModel} from "#nuxt/mongoose";

export const userSchema = defineMongooseModel({
    name: 'User',
    schema: {
        email: 'string',
        password: 'string',
    }
});