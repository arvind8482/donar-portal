// app/api/orgusers/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OrgUser from '@/lib/models/Marketing';
import { connectToDB } from '@/lib/mongodb';

export async function GET(req: NextRequest) {
  await connectToDB();
  const OrgUsers = await OrgUser.find();
  return NextResponse.json(OrgUsers);
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const newOrgUser = await OrgUser.create(body);
  return NextResponse.json(newOrgUser);
}
