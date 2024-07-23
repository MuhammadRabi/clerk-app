import { connectToDB } from '@/lib/db/db'
import { CreateUserParams } from '@/types'
import { User } from '../db/models/user'

export default async function createUser(user: CreateUserParams) {
  try {
    await connectToDB()
    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    throw new Error('there is an error')
  }
}
