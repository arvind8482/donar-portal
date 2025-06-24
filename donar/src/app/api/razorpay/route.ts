// src/app/api/razorpay/route.ts
import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const amount = body.amount;

    console.log('Body:', body);
    console.log('Amount:', amount);
    console.log('Key:', process.env.RAZORPAY_KEY_ID);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: 'receipt_order_123',
      payment_capture: 1,
    });

    return NextResponse.json(order);
  } catch (err: any) {
    console.error('RAZORPAY ERROR:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
