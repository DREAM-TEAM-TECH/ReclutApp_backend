import { Schema, model, Document } from 'mongoose'

const VacantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Schema.Types.Decimal128, required: true },
});

interface IVacant extends Document {
    name: string,
    description: string,
    salary: number,
};

export default model<IVacant>('Vacant', VacantSchema);