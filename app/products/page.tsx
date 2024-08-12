import ProductCard from '@/components/ProductCard'
import { ProductProps } from '@/types'
import { getProducts } from '@/utils/getProducts'
import React from 'react'

export default async function Page() {
  const products = await getProducts()

  return (
    <section className='py-48'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product: ProductProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
