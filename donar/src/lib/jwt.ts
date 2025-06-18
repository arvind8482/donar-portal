import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// ========================
// Generate JWT Token
// ========================
export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

// ========================
// Verify JWT Token
// ========================
export function verifyToken(token: string): any | null {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

// ========================
// Hash Password
// ========================
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// ========================
// Verify Password
// ========================
export async function verifyPassword(
  enteredPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, hashedPassword);
}
