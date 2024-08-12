'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLinks() {
  const pathname = usePathname()
  return (
    <div className='flex gap-6'>
      <Link href='/' className={`${pathname === '/' ? 'text-pink-600' : ''}`}>
        Home
      </Link>
      <Link
        href='/dashboard'
        className={`${pathname === '/dashboard' ? 'text-pink-600' : ''}`}
      >
        Dashboard
      </Link>
      {/* <Link
        href='/server'
        className={`${pathname === '/server' ? 'text-pink-600' : ''}`}
      >
        Server
      </Link>
      <Link
        href='/client'
        className={`${pathname === '/client' ? 'text-pink-600' : ''}`}
      >
        Client
      </Link> */}
      <Link
        href='/products'
        className={`${pathname === '/products' ? 'text-pink-600' : ''}`}
      >
        Products
      </Link>
    </div>
  )
}

export default NavLinks
