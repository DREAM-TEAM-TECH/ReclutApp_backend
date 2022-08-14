import { Schema, model, Document } from 'mongoose'

const PointSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    maps_link: { type: String, required: true },
    arrival: { type: String, required: true },
    departure: { type: String, required: true },
    notes: { type: String, required: true },
});

interface IPoint extends Document {
    name: string,
    address: string,
    maps_link: string,
    arrival: string,
    departure: string,
    notes: string,
};

export default model<IPoint>('Point', PointSchema);