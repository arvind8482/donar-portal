import { NextResponse } from 'next/server';
import { connectToDBUsers } from '../../../lib/mongodb';
import { getUserModel } from '../../../lib/models/User';
import {
  generateToken,
  hashPassword,
} from '../../../lib/auth';
import { sendVerificationEmail } from '../../../lib/mailer';


export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const conn = await connectToDBUsers();
    const User = getUserModel(conn);

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user with isVerified false
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'donor',
      isVerified: false,
      organizationDetails: {
        orgName: 'iskonDelhi',
      },
    });

    // Generate email verification token
    const verificationToken = generateToken({ userId: newUser._id }, '1d');

    // Send email
    await sendVerificationEmail(email, verificationToken);

    return NextResponse.json(
      {
        message: 'Registration successful. Check your email to verify your account.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error.message);
    return NextResponse.json(
      { message: 'Registration failed', error: error.message },
      { status: 500 }
    );
  }
}
