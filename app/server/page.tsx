import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function Page() {
  const user = await currentUser()
  const { userId } = auth()

  const createdAt = user?.createdAt
  const date = new Date(createdAt)
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
              <pre className='capitalize'>created at: {registerDate}</pre>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
