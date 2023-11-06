'use client'
import { ListOfProducts } from '@/components/ListOfProducts'
import { useAppDispatch } from '@/hooks/store'
import { useStateSearch } from '@/hooks/useStateSearch'
import { fetchSearchProduct } from '@/slices/searchSlice'
import { STATUS } from '@/utils'
import { useEffect } from 'react'

interface ProductPageProps {
  params: {
    search: string
  }
}

const SearchProduct: React.FC<ProductPageProps> = ({ params: { search } }) => {
  const dispatch = useAppDispatch()
  const { searchError, searchProducts, searchStatus } = useStateSearch()

  useEffect(() => {
    dispatch(fetchSearchProduct({ search }))
  }, [search, dispatch])

  return (
    <div className='section'>
      {searchStatus === STATUS.LOADING && (
        <div className='text-center text-3xl font-bold'>Loading...</div>
      )}
      {searchError && (
        <div className='text-center text-3xl font-bold'>{searchError}</div>
      )}
      {searchProducts.length > 0 ? (
        <>
          {/* <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>
            {search.replace('-', ' ')}
          </div> */}
          <ListOfProducts products={searchProducts} />
        </>
      ) : (
        <div className='min-h-[80vh]'>
          <h1 className='font-semibold text-2xl text-center bg-red-600 py-10   text-white'>
            No se encontraron productos para tu busqueda
          </h1>
        </div>
      )}
    </div>
  )
}
export default SearchProduct
