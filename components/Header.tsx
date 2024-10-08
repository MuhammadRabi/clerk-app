import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { ThemeSwitcher } from './ThemeSwitcher'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import { Fan } from 'lucide-react'

import Cart from './cart/Cart'

export default function Header() {
  return (
    <header className='container flex items-center justify-between gap-4 border-b p-3 font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-100'>
      <Fan className='hidden cursor-pointer md:flex' />
      <NavLinks />
      <MobileNav />
      <div className='flex items-center gap-4'>
        <Cart />
        <ThemeSwitcher />
        <SignedOut>
          <SignInButton>
            <Button size='sm'>sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonOuterIdentifier: 'dark:text-slate-200'
              }
            }}
          />
        </SignedIn>
      </div>
    </header>
  )
}
