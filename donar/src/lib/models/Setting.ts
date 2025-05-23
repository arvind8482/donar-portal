import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema({
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  preferences: {
    notifications: Boolean,
    theme: String,
    timezone: String
  }
});

export default mongoose.models.Setting || mongoose.model('Setting', SettingSchema);