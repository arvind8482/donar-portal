 import mongoose from "mongoose";

// models/Campaign.js
const CampaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  goalAmount: Number,
  collectedAmount: { type: Number, default: 0 },
  startDate: Date,
  endDate: Date,
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Campaign || mongoose.model('Campaign', CampaignSchema);