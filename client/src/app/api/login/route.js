// app/api/login/route.js
export async function POST(req) {
  const { email, password } = await req.json();

  if (email === 'test@example.com' && password === 'password123') {
    return Response.json({
      success: true,
      message: 'Login successful',
      token: 'mock-jwt-token'
    });
  }

  return Response.json(
    { success: false, message: 'Invalid credentials' },
    { status: 401 }
  );
}
