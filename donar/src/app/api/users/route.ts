// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectToDBUsers } from '../../../lib/mongodb';
import { getUserModel } from '../../../lib/models/User';

const SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function GET(req: NextRequest) {
  try {
    const conn = await connectToDBUsers();
    const User = getUserModel(conn);

    const users = await User.find().select('-password'); // Exclude password

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const conn = await connectToDBUsers();
    const User = getUserModel(conn);

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      SECRET,
      { expiresIn: '1h' }
    );

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('❌ Login error:', error);
    return NextResponse.json({ message: 'Login failed' }, { status: 500 });
  }
}
