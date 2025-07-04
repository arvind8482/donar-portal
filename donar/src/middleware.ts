import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// ========================
// Decode JWT and extract user
// ========================
async function getUserFromToken(token: string) {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

// ========================
// Main Middleware Function
// ========================
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Redirect if no token
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Decode and validate token
  const user = await getUserFromToken(token);

  // Redirect if invalid or expired token
  if (!user || !user.role) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Optional: Role-based access control
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/dashboard/organization') && user.role !== 'organization') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (pathname.startsWith('/dashboard/donor') && user.role !== 'donor') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (pathname.startsWith('/dashboard/admin') && user.role !== 'superadmin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

// ========================
// Apply middleware only to /dashboard routes
// ========================
export const config = {
  matcher: ['/dashboard/:path*'],
};
