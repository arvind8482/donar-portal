import { Schema, Connection, Model, Document } from 'mongoose';

export type UserRole = 'superadmin' | 'organization' | 'donor';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  organizationDetails?: {
    orgName?: string;
    contactPerson?: string;
    website?: string;
    phone?: string;
    address?: string;
  };
  donorDetails?: {
    donationPreference?: string[];
    phone?: string;
    address?: string;
  };
  createdAt: Date;
}

// Schema Definition
const UserSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['superadmin', 'organization', 'donor'],
    required: true
  },
  organizationDetails: {
    orgName: { type: String },
    contactPerson: { type: String },
    website: { type: String },
    phone: { type: String },
    address: { type: String }
  },
  donorDetails: {
    donationPreference: [{ type: String }],
    phone: { type: String },
    address: { type: String }
  },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'users',
  timestamps: false  // You already set createdAt manually
});

// Model Getter
export const getUserModel = (conn: Connection): Model<IUser> => {
  return conn.models.User || conn.model<IUser>('User', UserSchema);
};
