import mongoose from 'mongoose';

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const DBUrl = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.7beqiva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export async function connectToDB() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(DBUrl);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
