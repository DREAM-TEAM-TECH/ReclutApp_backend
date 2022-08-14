import mongoose from 'mongoose'

const password = "ReclutApp090909";
const uri = `mongodb+srv://reclutappAdmin:${password}@cluster0.7hlq2nx.mongodb.net/reclutapp?retryWrites=true&w=majority`;

export async function connection() {
    await mongoose.connect(uri);
    console.log('Database is connected');
}