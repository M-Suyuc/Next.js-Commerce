'use client'
import { ListOfProducts } from '@/components/ListOfProducts'
import { useAppDispatch } from '@/hooks/store'
import { useStateCategories } from '@/hooks/useStateCategories'
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
  const { productsByCategory, categoriesStatus } = useStateCategories()

  useEffect(() => {
    if (!category) return
    dispatch(fetchProductsByCategory({ category }))
  }, [category, dispatch])

  return (
    <div className='section'>
      {categoriesStatus === STATUS.LOADING && (
        <div className='text-center text-3xl font-bold'>Loading...</div>
      )}
      {productsByCategory && <ListOfProducts products={productsByCategory} />}
    </div>
  )
}
export default CategoryPage
