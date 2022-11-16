import { Schema, model, Document, Types } from 'mongoose'

const PointSchema = new Schema({
    points: [{
        name: { type: String, required: true },
        address: { type: String, required: true },
        maps_link: { type: String, required: true },
        arrival: { type: String, required: true },
        departure: { type: String, required: true },
        notes: { type: String, required: true },
    }]
});

interface IPoint extends Document {
    points: [{
        name: string,
        address: string,
        maps_link: string,
        arrival: string,
        departure: string,
        notes: string,
        _id: Types.ObjectId
    }]
};

export default model<IPoint>('Point', PointSchema);