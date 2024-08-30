import { Product } from '@/types'
import Image from 'next/image'
import AddToCartBtn from '../cart/AddToCartBtn'

function ProductCard({ name, price, desc, id, image }: Product) {
  return (
    <article className='mx-auto my-2 flex w-full max-w-sm flex-col items-start rounded-md border bg-slate-100 shadow-md duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-600 dark:bg-gray-700'>
      <Image
        src={image!}
        width={640}
        height={480}
        alt='product-img'
        className='rounded-t-md'
      />
      <article className='grid h-full grid-rows-[auto_1fr_auto] gap-3 p-5'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='text-sm text-gray-700 dark:text-gray-400'>{desc}</p>
        <div className='flex items-center'>
          <h3 className='text-[1.1rem] font-bold'>${price}</h3>
          <AddToCartBtn name={name} price={price} id={id} desc={desc} />
        </div>
      </article>
    </article>
  )
}

export default ProductCard
