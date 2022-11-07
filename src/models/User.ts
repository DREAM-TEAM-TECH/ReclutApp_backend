import { Schema, model, Document, Types } from 'mongoose'

const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    //role
    role: { type: Schema.Types.ObjectId, ref: "Role" }, // required: true
    //transportation
    transportation: { type: Schema.Types.ObjectId, ref: "Transportation" },
    //companies
    companies: { type: Schema.Types.ObjectId, ref: "Company" },
});

interface IUser extends Document {
    name: string,
    password: string,
    email: string,
    phone: string,
    role: Types.ObjectId,
    transportation: Types.ObjectId,
    companies: Types.ObjectId,
};

export default model<IUser>('User', UserSchema);