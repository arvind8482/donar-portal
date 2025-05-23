// app/api/compaigns/route.ts
import Campaign from '@/lib/models/Campaign'; // should be the model, not the schema
import { connectToDB } from '@/lib/mongodb';

export async function GET(req) {
  await connectToDB();
  const campaigns = await Campaign.find();
  return Response.json(campaigns);
}

export async function POST(req) {
  await connectToDB();
  const body = await req.json();
  const newCampaign = await Campaign.create(body);
  return Response.json(newCampaign);
}
