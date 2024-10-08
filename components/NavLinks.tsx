'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLinks() {
  const pathname = usePathname()
  return (
    <div className='mx-auto hidden justify-around gap-14 md:flex'>
      <Link
        href='/'
        className={`${pathname === '/' ? 'text-pink-600' : ''} duration-300 hover:text-pink-600`}
      >
        Home
      </Link>
      <Link
        href='/products'
        className={`${pathname === '/products' ? 'text-pink-600' : ''} duration-300 hover:text-pink-600`}
      >
        Products
      </Link>
      <Link
        href='/test-path'
        className={`${pathname === '/test-path' ? 'text-pink-600' : ''} duration-300 hover:text-pink-600`}
      >
        Test
      </Link>
    </div>
  )
}

export default NavLinks
