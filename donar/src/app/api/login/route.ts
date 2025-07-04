import { NextRequest, NextResponse } from 'next/server';
import { connectToDBUsers } from '../../../lib/mongodb';
import { getUserModel } from '../../../lib/models/User';
import { verifyPassword, generateToken } from '../../../lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Connect to DB
    const conn = await connectToDBUsers();
    const User = getUserModel(conn);

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // JWT payload
    const payload = {
      userId: user._id.toString(),
      role: user.role,
      organizationId: user.organizationDetails?.orgName || 'iskonDelhi',
    };

    // Generate JWT token
    const token = generateToken(payload);

    // Create response and set cookie
    const response = NextResponse.json(
      {
        message: 'Login successful',
        token,
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
          organizationId: payload.organizationId,
        },
      },
      { status: 200 }
    );

    // ✅ Set token as HTTP-only cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  } catch (error: any) {
    console.error('Login error:', error.message);
    return NextResponse.json(
      { message: 'Login failed', error: error.message },
      { status: 500 }
    );
  }
}
