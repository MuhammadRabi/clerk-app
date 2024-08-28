import { Button } from './ui/button'
import Link from 'next/link'
import { CircleCheck, CircleX } from 'lucide-react'
import { cn } from '@/lib/utils'

type PaymentMessageProps = {
  message: string
  text: string
  type: 'success' | 'cancel'
}

export default function PaymentMessage({
  message,
  text,
  type
}: PaymentMessageProps) {
  return (
    <section className='my-36 flex flex-col items-center justify-center space-y-8'>
      {/* <div
        className={`container w-3/4 rounded-md p-6 text-center md:w-1/3 ${type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}
      > */}
      <div
        className={cn(
          'container w-3/4 rounded-md p-6 text-center md:w-1/3',
          type === 'success'
            ? 'bg-green-100 dark:bg-emerald-900'
            : 'bg-red-100 dark:bg-rose-900'
        )}
      >
        {type === 'success' ? (
          <CircleCheck size={72} className='mx-auto mb-4 text-green-400' />
        ) : (
          <CircleX size={72} className='mx-auto mb-4 text-red-400' />
        )}

        <h2 className='mb-4 text-xl font-bold capitalize md:text-2xl'>
          {message}
        </h2>
        <p>{text}</p>
      </div>
      <Button>
        <Link href={'/'}>Return to Homepage</Link>
      </Button>
    </section>
  )
}
