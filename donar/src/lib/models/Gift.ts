// models/Gift.ts
import { Schema, Connection, Model, Document, Types } from 'mongoose';

export interface IGift extends Document {
  title: string;
  description: string;
  value: number;
  donorId: Types.ObjectId;
  organizationId: Types.ObjectId;
}

const GiftSchema = new Schema<IGift>(
  {
    title: { type: String, required: true },
    description: { type: String },
    value: { type: Number, required: true },
    donorId: { type: Schema.Types.ObjectId, ref: 'Donor', required: true },
    organizationId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    collection: 'gifts', // ✅ Use your actual MongoDB collection name
    timestamps: true,
  }
);

// ✅ Register model with provided connection
export const getGiftModel = (conn: Connection): Model<IGift> => {
  return conn.models.Gift || conn.model<IGift>('Gift', GiftSchema);
};
