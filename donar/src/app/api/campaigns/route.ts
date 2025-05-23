// app/api/campaigns/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Campaign from '@/lib/models/Campaign';
import { connectToDBCampaign } from '@/lib/mongodb';

export async function GET(req: NextRequest) {
  try {
    await connectToDBCampaign();
    const campaigns = await Campaign.find();
    return NextResponse.json(campaigns);
  } catch (error) {
    console.error("GET Campaigns error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDBCampaign();
    const body = await req.json();
    const newCampaign = await Campaign.create(body);
    return NextResponse.json(newCampaign);
  } catch (error) {
    console.error("POST Campaign error:", error);
    return NextResponse.json({ error: "Failed to create campaign" }, { status: 500 });
  }
}
