// app/api/marketings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Marketing from '@/lib/models/Marketing';
import { connectToDB } from '@/lib/mongodb';

export async function GET(req: NextRequest) {
  await connectToDB();
  const marketings = await Marketing.find();
  return NextResponse.json(marketings);
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const newMarketing = await Marketing.create(body);
  return NextResponse.json(newMarketing);
}
