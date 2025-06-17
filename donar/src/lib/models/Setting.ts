import { Schema, Connection, Model, Document, Types } from 'mongoose';

// Interface for the embedded preferences object
interface Preferences {
  notifications: boolean;
  theme: string;
  timezone: string;
}

// Main Setting document interface
export interface ISetting extends Document {
  organizationId: Types.ObjectId;
  preferences: Preferences;
}

// Mongoose schema
const SettingSchema = new Schema<ISetting>({
  organizationId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true,
  },
  preferences: {
    notifications: { type: Boolean, default: true },
    theme: { type: String, default: 'light' },
    timezone: { type: String, default: 'UTC' },
  },
}, {
  collection: 'settings',
  timestamps: true,
});

// Factory function to get Setting model for a specific Mongoose connection
export const getSettingModel = (conn: Connection): Model<ISetting> => {
  return conn.models.Setting || conn.model<ISetting>('Setting', SettingSchema);
};
