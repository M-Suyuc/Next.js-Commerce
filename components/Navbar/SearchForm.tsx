'use client'
import { useState } from 'react'
import { SearchSVG } from './IconSVG'
import { useRouter } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (search === '') {
      return null
    }
    router.push(`search/${search}`)
    setSearch('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newQuery = e.target.value
    setSearch(newQuery)
  }

  return (
    <div className='w-full px-6 lg:px-0'>
      <form
        onSubmit={handleSubmit}
        className='relative w-full overflow-hidden border border-gray-300 rounded-lg'
      >
        <input
          placeholder='laptop, phone, bag, watch...'
          className='inline-block outline-none pl-2 pr-24 lg:pr-72 py-[.40rem] w-full'
          onChange={handleChange}
          value={search}
        />
        <button className='absolute top-0 right-0 flex items-center h-full px-2 bg-blue-600'>
          <SearchSVG />
        </button>
      </form>
    </div>
  )
}
