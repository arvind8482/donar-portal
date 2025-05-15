// lib/dbconnect.js
import mongoose from 'mongoose'

let isConnected = false

export const dbconnect = async () => {
  if (isConnected) return

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = db.connections[0].readyState === 1
    console.log('✅ MongoDB connected')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}
