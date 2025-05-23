// app/api/compaigns/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Campaign from '@/lib/models/Campaign';
import { connectToDB } from '@/lib/mongodb';

export async function GET(req: NextRequest) {
  await connectToDB();
  const campaigns = await Campaign.find();
  return NextResponse.json(campaigns);
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const newCampaign = await Campaign.create(body);
  return NextResponse.json(newCampaign);
}
