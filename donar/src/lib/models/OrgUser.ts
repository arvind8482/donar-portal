// models/OrgUser.ts
import { Schema, Connection, Model, Document, Types } from 'mongoose';

export interface IOrgUser extends Document {
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  organizationId: Types.ObjectId;
}

const OrgUserSchema = new Schema<IOrgUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'editor', 'viewer'],
      required: true,
    },
    organizationId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    collection: 'orgusers', // ✅ Actual collection name
    timestamps: true,
  }
);

// ✅ Register model with provided connection
export const getOrgUserModel = (conn: Connection): Model<IOrgUser> => {
  return conn.models.OrgUser || conn.model<IOrgUser>('OrgUser', OrgUserSchema);
};
