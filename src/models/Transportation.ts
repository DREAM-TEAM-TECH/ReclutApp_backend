import { Schema, model, Document } from 'mongoose'

const TransportationSchema = new Schema({
    license_plates: { type: String, required: true },
    //photos
    photos: [{ type: String }],
    name: { type: String, required: true }
});

interface ITransportation extends Document {
    license_plates: string,
    photos: string[],
    name: string
};

export default model<ITransportation>('Transportation', TransportationSchema);