import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/dbconnect'
import { User } from '@/models/User'

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()
    const { name, password } = body

    if (!name || !password) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const user = new User({ name, password })
    await user.save()

    return NextResponse.json({ message: 'User created successfully' })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 })
  }
}
