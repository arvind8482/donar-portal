// app/api/marketings/route.ts 

import {getMarketingModel} from '../../../lib/models/Marketing';
import { connectToDBMarketing } from '../../../lib/mongodb';

export async function GET() {
  try { 
const conn = await connectToDBMarketing();
    console.log("Connection Established")
const Marketing = getMarketingModel(conn);

    const marketings = await Marketing.find();

    return new Response(JSON.stringify(marketings), { status: 200 },
  );
  } catch (error: any) {
    console.error("GET marketing error:", error.message);
    return new Response("Failed to fetch marketing: " + error.message, { status: 500 });
  }
}

 
