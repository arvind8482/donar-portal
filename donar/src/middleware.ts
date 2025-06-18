import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || request.headers.get('Authorization')?.replace('Bearer ', '');

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verify JWT token
  const user = verifyToken(token);
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect all /dashboard routes
};
