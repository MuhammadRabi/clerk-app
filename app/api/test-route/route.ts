import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth()

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  // Perform your Route Handler's logic

  return NextResponse.json({ userId }, { status: 200 })
}
