import  { Schema, Connection, Model, Document, Types } from 'mongoose';

interface ICampaign extends Document {
  title: string;
  description: string;
  goalAmount: number;
  collectedAmount: number;
  startDate: Date;
  endDate: Date;
  organizationId: Types.ObjectId;
}

const campaignSchema = new Schema<ICampaign>(
  {
    title: { type: String, required: true },
    description: { type: String },
    goalAmount: { type: Number },
    collectedAmount: { type: Number, default: 0 },
    startDate: { type: Date },
    endDate: { type: Date },
    organizationId: { type: Schema.Types.ObjectId, ref: 'User' }, // ✅ use Schema.Types.ObjectId for schema
  },
  {
    collection: 'campaign',
    timestamps: true,
  }
);

// ✅ Register model properly
export const getCampaignModel = (conn: Connection): Model<ICampaign> => {
  return conn.models.Campaign || conn.model<ICampaign>('Campaign', campaignSchema);
};
