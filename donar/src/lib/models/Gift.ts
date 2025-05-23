 import mongoose from "mongoose"

// models/Gift.js
const GiftSchema = new mongoose.Schema({
  title: String,
  description: String,
  value: Number,
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor' },
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


export default mongoose.models.Gift || mongoose.model('Gift', GiftSchema);
