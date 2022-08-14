import { Schema, model, Document, Types } from 'mongoose'

const CandidateSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: String, required: true },
    imss: { type: String, required: true },
    assist: { type: Boolean, required: true },
    //point
    point: { type: Schema.Types.ObjectId, ref: "Point" },
    //vacant
    vacant: { type: Schema.Types.ObjectId, ref: "Vacant" },
    //company
    company: { type: Schema.Types.ObjectId, ref: "Company" },
});

interface ICandidate extends Document {
    name: string,
    description: string,
    phone: string,
    imss: string,
    assist: string,
    point: Types.ObjectId,
    vacant: Types.ObjectId,
    company: Types.ObjectId,
};

export default model<ICandidate>('Candidate', CandidateSchema);