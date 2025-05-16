// app/api/register/route.ts (for App Router) or pages/api/register.ts (for Pages Router)
import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/dbconnect'
import { User } from '@/models/User'

export async function POST(req: Request) {
  try {
    await connectDB() // Make sure to wait for DB connection

    const body = await req.json()
    const { name, password } = body

    if (!name || !password) {
      return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 })
    }

    const user = new User({ name, password })
    await user.save()  // Save user to MongoDB

    return new Response(JSON.stringify({ message: 'User created successfully' }), { status: 201 })
  } catch (error) {
    console.error('DB or save error:', error)
    return new Response(JSON.stringify({ error: 'Error creating user' }), { status: 500 })
  }
}