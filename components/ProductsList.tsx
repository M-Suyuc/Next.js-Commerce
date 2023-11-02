'use client'
import { useState } from 'react'
import { STATUS } from '@/utils'
import { ListOfProducts } from './ListOfProducts'
import { useStateProducts } from '@/hooks/useStateProducts'

export const ProductsList = () => {
  const [category] = useState('')
  const { errorProducts, products, productsStatus } = useStateProducts()

  return (
    <section>
      <div className='flex md:gap-2'>
        <div className='w-full'>
          {productsStatus === STATUS.LOADING && (
            <div className='text-center text-4xl font-bold'>Loading...</div>
          )}
          {productsStatus === STATUS.FAILED && <div>{errorProducts}</div>}
          <ListOfProducts products={products} category={category} />
        </div>
      </div>
    </section>
  )
}
