 import mongoose from "mongoose"

 // models/Donor.js
const DonorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  donationPreference: [String],
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Donor || mongoose.model('Donor', DonorSchema);