'use client'
import { ListOfProducts } from '@/components/ListOfProducts'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { fetchProductsByCategory } from '@/slices/categoriesSlice'
import { STATUS } from '@/utils'
import { useEffect } from 'react'

interface ProductPageProps {
  params: {
    category: string
  }
}

const CategoryPage: React.FC<ProductPageProps> = ({ params: { category } }) => {
  const dispatch = useAppDispatch()

  const products = useAppSelector(
    (state) => state.categories.productsByCategory
  )
  const status = useAppSelector(
    (state) => state.categories.productsByCategoryStatus
  )

  useEffect(() => {
    dispatch(fetchProductsByCategory({ category }))
  }, [category, dispatch])

  return (
    <div className='section'>
      <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>
        {category.replace('-', ' ')}
      </div>
      {status === STATUS.LOADING && (
        <div className='text-center text-3xl font-bold'>Loading...</div>
      )}
      {products && <ListOfProducts products={products} />}
    </div>
  )
}
export default CategoryPage
