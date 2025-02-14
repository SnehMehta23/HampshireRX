import {defineMongooseModel} from "#nuxt/mongoose";

export const userSchema = defineMongooseModel({
    name: 'User',
    schema: {
        email: {type: 'string', unique: true},
        password: {type: 'string'},
    }
});
