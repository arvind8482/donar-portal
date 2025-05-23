import { connectToDBPayments } from '@/lib/mongodb';
import { Payment } from '@/lib/models/Payment';
import { NextResponse } from 'next/server';

export async function GET() {
  try { 
    await connectToDBPayments();
    const payments = await Payment.find();
    return NextResponse.json(payments);
  } catch (error) {
    console.error("GET /api/payments error:", error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
