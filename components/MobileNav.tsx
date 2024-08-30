'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'

function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <AlignJustify
          size={36}
          aria-label='menu-toggle'
          className='rounded-sm p-0.5 duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 md:hidden'
        />
      </SheetTrigger>
      <SheetContent className='flex w-full items-center justify-center'>
        <div className='flex flex-col gap-9 text-4xl font-bold'>
          <Link
            href='/'
            className={`${pathname === '/' ? 'text-pink-600' : ''}`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href='/test-path'
            className={`${pathname === '/test-path' ? 'text-pink-600' : ''}`}
            onClick={() => setOpen(false)}
          >
            Test
          </Link>
          <Link
            href='/products'
            className={`${pathname === '/products' ? 'text-pink-600' : ''}`}
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
