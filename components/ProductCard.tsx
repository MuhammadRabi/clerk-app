import Checkout from './Checkout'
import { ProductProps } from '@/types'
import Image from 'next/image'
import { useAuth } from '@clerk/nextjs'

function ProductCard({ name, price, desc }: ProductProps) {
  const { userId } = useAuth()
  return (
    <article className='mx-auto my-2 flex w-full max-w-sm flex-col justify-between space-y-2 rounded-md border bg-slate-100 p-6 shadow-md duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-600 dark:bg-gray-700'>
      {/* <Image src=''/> */}
      <h3 className='text-2xl font-bold'>{name}</h3>
      <p className='text-sm text-gray-700 dark:text-gray-400'>{desc}</p>
      <div className='flex items-center'>
        <h4 className='text-xl font-semibold'>${price}</h4>
        <Checkout name={name} price={price} buyerId={userId!} desc={desc} />
      </div>
    </article>
  )
}

export default ProductCard
