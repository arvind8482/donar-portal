
 import mongoose from "mongoose"


 // models/User.js
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['superadmin', 'organization', 'donor'],
    required: true
  },
  organizationDetails: {
    orgName: String,
    contactPerson: String,
    website: String,
    phone: String,
    address: String
  },
  donorDetails: {
    donationPreference: [String],
    phone: String,
    address: String
  },
  createdAt: { type: Date, default: Date.now },
},
 {
    // ✅ Replace with the actual collection name in MongoDB
    collection: 'users', 
  });


export default mongoose.models.User || mongoose.model('User', UserSchema);