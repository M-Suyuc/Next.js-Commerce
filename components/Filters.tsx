'use client'
import { FilterContext } from '@/context/filters'
import { useId, useContext, useEffect } from 'react'

interface Filter {
  maxNumer: number
}

export function Filters({ maxNumer }: Filter) {
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

  useEffect(() => {
    filters.minPrice = 0
  }, [maxNumer, filters])

  return (
    <>
      <section className='bg-zinc-50 p-4 mb-6'>
        <div className='w-full  flex flex-col justify-end sm:flex-row gap-4 md:gap-8'>
          <div className='bg-zinc-100 p-2'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor={minPriceFilterId}
            >
              Precio:
            </label>
            <div className='flex items-center'>
              <span className='mr-2'>${filters.minPrice} </span>
              <input
                className='bg-blue-500 appearance-none w-full h-1 rounded-full mt-2'
                type='range'
                id={minPriceFilterId}
                min='0'
                max={maxNumer}
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                step='5'
              />
              <span className='ml-2'>${maxNumer}</span>
            </div>
          </div>
          {/* 
          <div className='bg-zinc-100 p-2 flex items-center gap-4 '>
            <select onChange={() => {}}>
              <option value='' selected hidden>
                Sort by
              </option>
              <option value='priceH'>highest price</option>
              <option value='priceL'>lowest price</option>
            </select>
          </div> */}
        </div>
      </section>
    </>
  )
}
