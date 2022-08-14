import { Schema, model, Document } from 'mongoose'

const TransportationSchema = new Schema({
    license_plates: { type: String, required: true },
    //photos
    photos: [{ type: String }]
});

interface ITransportation extends Document {
    license_plates: string,
    photos: string[],
};

export default model<ITransportation>('Transportation', TransportationSchema);