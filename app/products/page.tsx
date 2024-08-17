import Products from '@/components/Products'
import { getProducts } from '@/utils/getProducts'
import React from 'react'

export default async function Page() {
  const products = await getProducts()

  return (
    <section className='bg-slate-200 py-12 dark:bg-slate-700'>
      <div className='container py-4'>
        <h1 className='text-center text-3xl font-bold capitalize text-slate-800 md:text-5xl'>
          products
        </h1>
        <p className='mx-auto mt-2 w-full  text-center text-base text-gray-600 md:w-3/4 md:text-xl'>
          Browse our collections for unique finds, trending items, and must-have
          products. Dive in and discover something new!
        </p>
      </div>
      <Products products={products} />
    </section>
  )
}
