'use client'
import { Filters } from '@/components/Filters'
import { ListOfProducts } from '@/components/ListOfProducts'
import { useAppDispatch } from '@/hooks/store'
import { useFilters } from '@/hooks/useFilters'
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
  const { filtersProducts } = useFilters()
  const { productsByCategory, categoriesStatus } = useStateCategories()

  const filteredProducts = filtersProducts(productsByCategory)

  useEffect(() => {
    dispatch(fetchProductsByCategory({ category }))
  }, [category, dispatch])

  return (
    <div className='section'>
      <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>
        {category.replace('-', ' ')}
      </div>
      {categoriesStatus === STATUS.LOADING && (
        <div className='text-center text-3xl font-bold'>Loading...</div>
      )}
      <Filters />
      {productsByCategory && <ListOfProducts products={filteredProducts} />}
    </div>
  )
}
export default CategoryPage
