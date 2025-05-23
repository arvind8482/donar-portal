import mongoose from "mongoose";

// models/Marketing.ts 

const MarketingSchema = new mongoose.Schema({
  campaignName: String,
  channel: { type: String, enum: ['email', 'social', 'sms', 'ads'] },
  message: String,
  sentAt: Date,
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
 {
    // ✅ Replace with the actual collection name in MongoDB
    collection: 'marketings', 
  });

export default mongoose.models.Marketing || mongoose.model('Marketing', MarketingSchema);
