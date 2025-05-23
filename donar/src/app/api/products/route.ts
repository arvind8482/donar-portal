// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Product from '@/lib/models/Product';
import { connectToDB } from '@/lib/mongodb';

export async function GET(req: NextRequest) {
  await connectToDB();
  const Products = await Product.find();
  return NextResponse.json(Products);
}

export async function POST(req: NextRequest) {
  await connectToDB();
  const body = await req.json();
  const newProduct = await Product.create(body);
  return NextResponse.json(newProduct);
}
