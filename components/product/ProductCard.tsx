import { Product } from '@/types'
import Image from 'next/image'
import AddToCartBtn from '../cart/AddToCartBtn'

function ProductCard({ name, price, desc, id }: Product) {
  return (
    <article className='mx-auto my-2 flex w-full max-w-sm flex-col justify-between space-y-2 rounded-md border bg-slate-100 p-6 shadow-md duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-600 dark:bg-gray-700'>
      {/* <Image src=''/> */}
      <h3 className='text-2xl font-bold'>{name}</h3>
      <p className='text-sm text-gray-700 dark:text-gray-400'>{desc}</p>
      <div className='flex items-center'>
        <h4 className='text-xl font-semibold'>${price}</h4>
        <AddToCartBtn name={name} price={price} id={id} desc={desc} />
      </div>
    </article>
  )
}

export default ProductCard
