'use client'
import { useAppDispatch } from '@/hooks/store'
import { fetchAllProducts } from '@/slices/productsSlice'
import { useEffect, useState } from 'react'

const Pagination = () => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(0)

  useEffect(() => {
    dispatch(fetchAllProducts({ page }))
  }, [dispatch, page])

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1)
  }

  return (
    <div>
      {page >= 1 && (
        <button
          onClick={prevPage}
          className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
        >
          <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            Previus
          </span>
        </button>
      )}

      <button
        onClick={nextPage}
        className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
      >
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
          Next
        </span>
      </button>
    </div>
  )
}

export default Pagination
