// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDBProducts } from '../../../lib/mongodb';
import { getProductModel } from '../../../lib/models/Product';

export async function GET(req: NextRequest) {
  try {
    const conn = await connectToDBProducts();
    const Product = getProductModel(conn);
    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    return NextResponse.json({ message: 'Failed to fetch products' }, { status: 500 });
  }
}
