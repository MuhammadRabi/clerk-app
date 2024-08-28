import { Button } from '@/components/ui/button'
import { Construction } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='container py-12 md:py-24'>
      <div className='space-y-6 rounded-lg border border-gray-200 py-6 dark:border-gray-700'>
        <h1 className='bg-gradient-to-r from-sky-400 to-emerald-700 bg-clip-text px-4 text-center text-4xl font-bold capitalize text-transparent md:text-7xl'>
          under construction!{' '}
        </h1>
        <Construction
          className='mx-auto text-slate-600 dark:text-slate-300'
          size={128}
        />
        <div className='mx-auto w-full space-y-6 md:w-3/4'>
          <p className='p-4 text-center text-muted-foreground md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            nesciunt consequatur ducimus maxime voluptatum, deleniti dolor sed
            eum perferendis assumenda corrupti id, porro dicta, ea quaerat sit
            et facere eligendi? Aperiam esse dolorum et fugit.
          </p>
          <div className='mx-auto flex w-fit flex-col justify-center gap-8 md:flex-row'>
            <Button>
              <Link href={'/products'}>Browse products</Link>
            </Button>
            <Button variant='outline'>
              <Link href={'/'}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
