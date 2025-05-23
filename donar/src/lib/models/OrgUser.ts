import mongoose from "mongoose";

// models/OrgUser.js
const OrgUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ['admin', 'editor', 'viewer'] },
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
 {
    // ✅ Replace with the actual collection name in MongoDB
    collection: 'orgusers', 
  });

export default mongoose.models.OrgUser || mongoose.model('OrgUser', OrgUserSchema);