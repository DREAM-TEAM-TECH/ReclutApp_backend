import mongoose from 'mongoose'

export async function connection() {
    console.log()
    await mongoose.connect(`mongodb+srv://reclutappAdmin:${process.env.MONGO_PASSWORD as string}@cluster0.7hlq2nx.mongodb.net/reclutapp?retryWrites=true&w=majority`);
    console.log('Database is connected');
}