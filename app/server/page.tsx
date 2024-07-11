import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function Page() {
  const user = await currentUser()
  const { userId } = auth()

  const createdAt = user?.createdAt
  const date = createdAt ? new Date(createdAt) : new Date()
  const registerDate = date.toLocaleString()

  return (
    <section className='py-48'>
      <div className='container flex flex-col items-center justify-center'>
        <p className='text-4xl dark:text-white'>
          This is a{' '}
          <span className='rounded-sm bg-teal-700 px-3 py-2 font-bold text-white'>
            server
          </span>{' '}
          component
        </p>
        {userId && (
          <div>
            <h1 className='py-8 text-center'>
              Welcome <span className='font-bold'>{user?.fullName}</span>!
            </h1>
            <div className='mb-3 max-w-xl rounded-sm bg-slate-200 p-3 text-center'>
              <p>created at: {registerDate}</p>
              <p className='font-bold text-pink-500'>
                email: {user?.emailAddresses[0].emailAddress}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
