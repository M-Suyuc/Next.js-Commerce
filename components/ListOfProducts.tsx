'use client'
import { type Product } from '@/types/interface.d'
import { Card } from './Card'
import { useEffect, useState } from 'react'
import {
  fetchAllCategories,
  fetchProductsByCategory
} from '@/slices/categoriesSlice'
import { useAppDispatch } from '@/hooks/store'
import { Filters } from './Filters'
import { useStateCategories } from '@/hooks/useStateCategories'
import { useFilters } from '@/hooks/useFilters'

interface Props {
  products: Product[]
}

export function ListOfProducts({ products }: Props) {
  const [maxNumer, setMaxNumer] = useState(0)
  const [categoryy, setCategoryy] = useState('')
  const dispatch = useAppDispatch()
  const { filtersProducts } = useFilters()
  const { productsByCategory, categories } = useStateCategories()

  const productsRender = categoryy === '' ? products : productsByCategory

  const filteredProducts = filtersProducts(productsRender)

  const encontrarProductoMasCaro = (filteredProducts: Product[]) => {
    let productoMasCaro = filteredProducts[0]
    for (let i = 1; i < filteredProducts.length; i++) {
      if (filteredProducts[i].price > productoMasCaro.price) {
        productoMasCaro = filteredProducts[i]
      }
    }
    setMaxNumer(productoMasCaro?.price)
  }

  useEffect(() => {
    encontrarProductoMasCaro(productsRender)
  }, [productsRender])

  useEffect(() => {
    if (!categoryy) return
    dispatch(fetchProductsByCategory({ category: categoryy.slug }))
  }, [categoryy, dispatch])

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  return (
    <section className='min-h-screen pb-10'>
      <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize w-full'>
        {categoryy ? categoryy.name.replace('-', ' ') : 'All products'}
      </div>
      <Filters maxNumer={maxNumer} />
      <div className='flex gap-2'>
        <aside className='hidden md:block h-screen lg:h-[70vh] bg-white min-w-[180px] overflow-y-auto overflow-x-hidden border border-slate-300'>
          <h4 className='text-lg lg:text-2xl font-bold  border-b border-solid py-3 text-left px-2'>
            Categories
          </h4>
          {categories.map((categoryy, index) => (
            <ul key={index}>
              <li className='cursor-pointer border-b border-solid hover:translate-x-2 transition ease-out '>
                <button
                  onClick={() => {
                    setCategoryy(categories[index])
                  }}
                  className='py-2  capitalize w-full h-full inline-block text-left px-2'
                >
                  {categoryy.name.replace('-', ' ')}
                </button>
              </li>
            </ul>
          ))}
        </aside>
        {/* ----------------- */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {filteredProducts.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
