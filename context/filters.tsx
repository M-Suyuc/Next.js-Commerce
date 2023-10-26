'use client'
import { createContext, useState } from 'react'

interface Filters {
  minPrice: number
}

interface FilterContextType {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    minPrice: 0
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
