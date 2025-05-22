 
import {paymentStr} from '@/lib/mongodb'
import {Payment} from '@/lib/models/payment'
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await mongoose.connect(paymentStr);
    const data = await Payment.find(); 
    return NextResponse.json({
      result: data
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    return NextResponse.json(
      {
        result: false,
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
