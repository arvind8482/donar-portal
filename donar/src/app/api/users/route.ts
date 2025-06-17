// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDBUsers } from '../../../lib/mongodb';
import { getUserModel } from '../../../lib/models/User';

export async function GET(req: NextRequest) {
  try {
    const conn = await connectToDBUsers();
    const User = getUserModel(conn);
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}
