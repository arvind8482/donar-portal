import { connectToDB } from '@/lib/mongodb';
import { Payment } from '@/lib/models/Payment';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDB();
  const test = await Payment.find().limit(1);
  return NextResponse.json(test);
}
