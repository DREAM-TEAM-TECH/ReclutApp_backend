import { Schema, model, Document, Types } from 'mongoose'

const RouteSchema = new Schema({
    name: { type: String, required: true },
    //transportation
    transportation: { type: Schema.Types.ObjectId, ref: "Transportation", required: true },
    //points
    points: { type: Schema.Types.ObjectId, ref: "Point" },
});

interface IRoute extends Document {
    name: string,
    transportation: Types.ObjectId,
    points: Types.ObjectId,
};

export default model<IRoute>('Route', RouteSchema);