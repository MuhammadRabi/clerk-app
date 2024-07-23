'use client'

import { useUser } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
  const { user, isLoaded, isSignedIn } = useUser()
  return (
    <section className='py-48'>
      <div className='container flex items-center justify-center'>
        <p className='text-4xl'>
          This is a{' '}
          <span className='rounded-sm bg-pink-700 px-3 py-2 font-bold text-white'>
            client
          </span>{' '}
          component
        </p>
      </div>
      {isSignedIn && (
        <h1 className='py-8 text-center'>
          Welcome <span className='font-bold'>{user?.fullName}</span>!
        </h1>
      )}
    </section>
  )
}
