import { FilterContext } from '@/context/filters'
import { ProdcustWithQ, Product } from '@/types/interface'
import { useContext } from 'react'

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProviderr')
  }
  const { filters } = context

  const filtersProducts = (products: ProdcustWithQ[] | Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice
        // && (context.filters.category === 'all' ||
        //   product.category === context.filters.category)
      )
    })
  }

  return { filtersProducts }
}
