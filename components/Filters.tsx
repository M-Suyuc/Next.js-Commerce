'use client'
import { FilterContext } from '@/context/filters'
import { useId, useContext } from 'react'

export function Filters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProviderr')
  }
  const { filters, setFilters } = context

  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((filters) => ({
      ...filters,
      minPrice: Number(event.target.value)
    }))
  }

  return (
    <section className='bg-zinc-100 p-4 flex justify-end mb-6'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice} </span>
      </div>
    </section>
  )
}
