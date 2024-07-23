import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ThemeSwitcher } from './ThemeSwitcher'
import NavLinks from './NavLinks'

export default function Header() {
  return (
    <header className='container flex items-center justify-between gap-4 border-b p-3 font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-100'>
      <NavLinks />
      <div className='flex items-center gap-4'>
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
