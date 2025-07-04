import { NextResponse } from 'next/server';
import { connectToDBUsers } from '../../../lib/mongodb';
import { getUserModel } from '../../../lib/models/User';
import { generateToken, hashPassword } from '../../../lib/auth';
// import { sendVerificationEmail } from '../../../lib/mailer'; // Uncomment if mailer is configured

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Input validation
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Connect to DB and get model
    const conn = await connectToDBUsers();
    const User = getUserModel(conn);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Prepare new user object
    const userData = {
      name,
      email,
      password: hashedPassword,
      role: 'organization', // default role
      isVerified: false,
      organizationDetails: {
        orgName: 'iskonDelhi',
      },
    };

    console.log('Creating user:', userData);

    // Save user to DB
    const newUser = await User.create(userData);
    console.log('User created:', newUser.email);

    // Generate email verification token (valid for 1 day)
    const verificationToken = generateToken({ userId: newUser._id }, '1d');
    console.log('Verification token:', verificationToken);

    // OPTIONAL: Send verification email (disable for now to avoid mail errors)
    // await sendVerificationEmail(email, verificationToken);

    return NextResponse.json(
      {
        message: 'Registration successful. Check your email to verify your account.',
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      {
        message: 'Registration failed',
        error: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
