import { Mongoose as mongoose, Schema } from "mongoose"

const schema = mongoose.schema;

export const ContractSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your first name'
    },
    firstName: {
        type: String,
        required: 'Enter your first name'
    },
    lastName: {
        type: String,
        required: 'Enter your last name'
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    company: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})