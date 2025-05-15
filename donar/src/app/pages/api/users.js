// pages/api/users.js
import dbconnect from '@/lib/dbconnect'
import User from '@/models/User'

export default async function handler(req, res) {
  await dbconnect()

  if (req.method === 'GET') {
    const users = await User.find()
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
