import { Schema, Connection, Model, Document, Types } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  organizationId: Types.ObjectId;
}

// Schema definition
const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  organizationId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  collection: 'products',
  timestamps: true
});

// Function to get Product model from a specific connection
export const getProductModel = (conn: Connection): Model<IProduct> => {
  return conn.models.Product || conn.model<IProduct>('Product', ProductSchema);
};
