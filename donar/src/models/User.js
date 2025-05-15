// models/User.js
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
})

// Prevent model overwrite in development
export default mongoose.models.User || mongoose.model('User', UserSchema)
