'use client'

import { ProductProps } from '@/types'
import ProductCard from './ProductCard'
import { useState, useMemo } from 'react'
import { Input } from './ui/input'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { ArrowUpDownIcon, KeyboardMusic, Search } from 'lucide-react'
import { Button } from './ui/button'

export default function Products({ products }: { products: ProductProps[] }) {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    return products
      .sort((a, b) => {
        switch (sortBy) {
          case 'low-to-high':
            return a.price - b.price
          case 'high-to-low':
            return b.price - a.price
          case 'a-to-z':
            return a.name.localeCompare(b.name)
          case 'z-to-a':
            return b.name.localeCompare(a.name)
          default:
            return 0
        }
      })
      .filter(product => {
        if (!query) return true
        return product.name.toLowerCase().includes(query.toLowerCase())
      })
  }, [query, sortBy, products])

  return (
    <section className='container'>
      <div className='mx-auto flex w-full flex-col items-center justify-between space-y-8 sm:flex-row'>
        <div className='relative'>
          <Search className='absolute left-1.5 top-1/2 -translate-y-3 text-gray-400' />
          <Input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Search products ...'
            className='w-full pl-8 dark:bg-slate-800 md:w-[400px]'
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='outline' className='flex-1 sm:flex-none'>
              <ArrowUpDownIcon className='mr-2 h-4 w-4' />
              {sortBy === 'featured'
                ? 'Featured'
                : sortBy === 'low-to-high'
                  ? 'Price: Low to High'
                  : sortBy === 'high-to-low'
                    ? 'Price: High to Low'
                    : sortBy === 'a-to-z'
                      ? 'Name: From A to Z'
                      : sortBy === 'z-to-a'
                        ? 'Name: From Z to A'
                        : 'No sorting applied'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <DropdownMenuRadioItem value='featured'>
                Featured
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='low-to-high'>
                Price: Low to High
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='high-to-low'>
                Price: High to Low
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='a-to-z'>
                Name: From A to Z
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value='z-to-a'>
                Name: From Z to A
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {!filteredProducts.length && (
        <div className='my-12 text-slate-500 dark:text-slate-200'>
          <KeyboardMusic className='mx-auto h-16 w-16' />
          <p className='text-center text-2xl font-bold '>
            There is No Products Found!
          </p>
        </div>
      )}
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
