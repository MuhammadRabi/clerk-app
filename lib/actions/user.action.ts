import { connectToDB } from '@/lib/db/db'
import { CreateUserParams, UpdateUserParams } from '@/types'
import { User } from '../db/models/user'

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDB()
    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    throw new Error('there is an error')
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDB()
    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true
    })
    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    throw new Error('there is an error')
  }
}
export async function deleteUser(clerkId: string) {
  try {
    await connectToDB()
    const deletedUser = await User.findOneAndDelete({ clerkId })
    if (!deletedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(deletedUser))
  } catch (error) {
    throw new Error('there is an error')
  }
}
