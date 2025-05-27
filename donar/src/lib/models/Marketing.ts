import  { Schema, Connection, Model, Document, Types } from 'mongoose';

interface IMarketing extends Document {
  campaignName: string;
  channel: string;
  message: String;
  sentAt: Date; 
  organizationId: Types.ObjectId;
}

// models/Marketing.ts 

const MarketingSchema = new Schema<IMarketing>({
  campaignName: String,
  channel: { type: String, enum: ['email', 'social', 'sms', 'ads'] },
  message: String,
  sentAt: Date,
  organizationId: { type: Schema.Types.ObjectId, ref: 'User' },
},
 {
    // ✅ Replace with the actual collection name in MongoDB
    collection: 'marketing', 
  });

 export const getMarketingModel = (conn: Connection): Model<IMarketing> => {
   return conn.models.Donor || conn.model<IMarketing>('Marketing', MarketingSchema);
 };
 
