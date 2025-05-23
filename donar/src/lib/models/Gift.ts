 import mongoose from "mongoose"

// models/Gift.js
const GiftSchema = new mongoose.Schema({
  title: String,
  description: String,
  value: Number,
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor' },
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
 {
    // ✅ Replace with the actual collection name in MongoDB
    collection: 'gifts', 
  });


export default mongoose.models.Gift || mongoose.model('Gift', GiftSchema);
