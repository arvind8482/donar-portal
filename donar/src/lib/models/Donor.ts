import  { Schema, Connection, Model, Document, Types } from 'mongoose';

interface Idonar extends Document {
  name: string;
  email: string;
  phone: number;
  address: number;
  donationPreference: string[]; 
  organizationId: Types.ObjectId;
}

 // models/Donor.ts
const DonorSchema = new Schema<Idonar>({
  name: String,
  email: String,
  phone: String,
  address: String,
  donationPreference: [String], 
  organizationId: { type: Schema.Types.ObjectId, ref: 'User' },
},
 {
    // ✅ Replace with the actual collection name in MongoDB
    collection: 'donor', 
  timestamps: true,
   }
 );
 
 // ✅ Register model properly
 export const getDonarModel = (conn: Connection): Model<Idonar> => {
   return conn.models.Donor || conn.model<Idonar>('Donor', DonorSchema);
 };
 
 