import { Schema, model, Document, Types } from 'mongoose'

const CompanySchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    maps_link: { type: String },
    //users
    users: { type: Schema.Types.ObjectId, ref: "User", required: true },
    //vacants
    vacants: { type: Schema.Types.ObjectId, ref: "Vacant" },
    //routes
    routes: { type: Schema.Types.ObjectId, ref: "Route" },
    //records
    records: [{ type: String }],
    //transportations
    transportations: { type: Schema.Types.ObjectId, ref: "Transportation" },
});

interface ICompany extends Document {
    name: string,
    phone: string,
    address: string,
    maps_link: string,
    records: string[],
    users: Types.ObjectId,
    vacants: Types.ObjectId,
    routes: Types.ObjectId,
    transportations: Types.ObjectId,
};

export default model<ICompany>('Company', CompanySchema);