import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();  

    const payment = await db.collection('payment').find({}).toArray();

    return NextResponse.json(payment);  
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch payment' }, { status: 500 });
  }
}

 