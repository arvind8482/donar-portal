// app/api/campaigns/route.ts
import {getCampaignModel} from '../../../lib/models/Campaign';
import { connectToDBCampaign } from '../../../lib/mongodb';

export async function GET() {
  try { 
const conn = await connectToDBCampaign();
    console.log("Connection Established")
const Campaign = getCampaignModel(conn);

    const campaigns = await Campaign.find();

    return new Response(JSON.stringify(campaigns), { status: 200 },
  );
  } catch (error: any) {
    console.error("GET Campaigns error:", error.message);
    return new Response("Failed to fetch campaigns: " + error.message, { status: 500 });
  }
}
