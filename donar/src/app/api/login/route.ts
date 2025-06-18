import { NextResponse } from 'next/server';
import { connectToDBUsers } from '../../../lib/mongodb';
import { getUserModel } from '../../../lib/models/User';
import { verifyPassword, generateToken } from '../../../lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

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
      userId: user._id,
      role: user.role,
      organizationId: user.organizationDetails?.orgName || 'iskonDelhi',
    };

    // Generate JWT token
    const token = generateToken(payload);

    // Return response
    return NextResponse.json(
      {
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
  } catch (error: any) {
    console.error('Login error:', error.message);
    return NextResponse.json({ message: 'Login failed', error: error.message }, { status: 500 });
  }
}
