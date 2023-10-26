'use client'
import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch } from '@/hooks/store'
import { fetchAllProducts } from '@/slices/productsSlice'
import {
  fetchAllCategories,
  fetchProductsByCategory
} from '@/slices/categoriesSlice'
import { STATUS } from '@/utils'
import { ListOfProducts } from './ListOfProducts'
import { useFilters } from '@/hooks/useFilters'
import { Filters } from './Filters'
import { Product } from '@/types/interface'
import { useStateCategories } from '@/hooks/useStateCategories'
import { useStateProducts } from '@/hooks/useStateProducts'

export const ProductsList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { errorProducts, products } = useStateProducts()
  const { categories, categoriesStatus, productsByCategory } =
    useStateCategories()

  const [category, setCategory] = useState('')
  const { filtersProducts } = useFilters()

  useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategories())
  }, [dispatch])

  useEffect(() => {
    if (!category) return
    dispatch(fetchProductsByCategory({ category }))
  }, [category, dispatch])

  // ------------------------------

  const productsRender = category === '' ? products : productsByCategory

  const tempProducts: Product[] = []
  // console.log(tempProducts)

  const randomIndex = useCallback(
    async (products: Product[]) => {
      if (products.length > 0) {
        for (const i in products) {
          let randomIndex: number = Math.floor(Math.random() * products.length)

          while (tempProducts.includes(products[randomIndex])) {
            randomIndex = Math.floor(Math.random() * products.length)
          }
          tempProducts[i] = products[randomIndex]
        }
      }
    },
    [products]
  )
  // randomIndex(products)

  // const filteredProducts = filtersProducts(tempProducts)
  // const filteredProducts = filtersProducts(products)

  return (
    <section className=''>
      <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize w-full'>
        {category ? category.replace('-', ' ') : 'Products'}
      </div>
      <Filters />
      {/* ------------------- */}
      <div className='flex md:gap-2'>
        <aside className='hidden md:block h-screen lg:h-[70vh] bg-white min-w-[180px] overflow-y-auto overflow-x-hidden border border-slate-300'>
          {/* border border-slate-300 */}
          <h4 className='text-lg lg:text-2xl font-bold  border-b border-solid py-3 text-left px-2'>
            Categories
          </h4>
          {categories.map((category, index) => (
            <ul key={index} className=''>
              <li className='cursor-pointer border-b border-solid hover:translate-x-2 transition ease-out '>
                <button
                  onClick={() => {
                    setCategory(categories[index])
                  }}
                  className='py-2  capitalize w-full h-full inline-block text-left px-2'
                >
                  {category.replace('-', ' ')}
                </button>
              </li>
            </ul>
          ))}
        </aside>

        <div className='w-full'>
          {categoriesStatus === STATUS.LOADING && (
            <div className='text-center text-4xl font-bold'>Loading...</div>
          )}
          {categoriesStatus === STATUS.FAILED && <div>{errorProducts}</div>}
          {/* <ListOfProducts products={filteredProducts} /> */}
          <ListOfProducts products={productsRender} />
        </div>
      </div>
    </section>
  )
}
