import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { STATUS } from '../utils/status'
import { useParams } from 'react-router-dom'
import { ListOfProducts } from '../componets/ListOfProducts/ListOfProducts'
import { Container } from '../componets/container/Cotainer'
import { useStore } from '../hooks/useStore'

const SearchProduct = () => {
  const { search } = useParams()
  const products = useSelector((state) => state.search.searchProduct)
  const status = useSelector((state) => state.search.searchProductStatus)
  const { fetchSearchProducts } = useStore()

  useEffect(() => {
    fetchSearchProducts({ search })
  }, [search])

  return (
    <Container>
      {status === STATUS.LOADING && <div className='text-center text-3xl font-bold'>Loading...</div>}
      {products.length > 0
        ? (
          <><div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>{search.replace('-', ' ')}</div>
            <ListOfProducts products={products} />
          </>
          )
        : (
          <div className='min-h-[80vh]'>
            <h1 className='font-semibold text-2xl text-center bg-red-600 py-10   text-white'>No se encontraron productos para tu busqueda</h1>
          </div>
          )}
    </Container>
  )
}
export default SearchProduct
