// app/api/settings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Setting from '@/lib/models/Setting';
import { connectToDB } from '@/lib/mongodb';

export async function GET(req: NextRequest) {
  await connectToDB();
  const Settings = await Setting.find();
  return NextResponse.json(Settings);
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const newSetting = await Setting.create(body);
  return NextResponse.json(newSetting);
}
