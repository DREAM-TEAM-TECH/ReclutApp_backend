import { Schema, model, Document } from 'mongoose'

const RoleSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
});

interface IRole extends Document {
    name: string,
    password: string,
};

export default model<IRole>('Role', RoleSchema);