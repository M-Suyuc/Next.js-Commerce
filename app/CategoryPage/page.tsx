import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { STATUS } from '../utils/status'
import { useParams } from 'react-router-dom'
import { ListOfProducts } from '../componets/ListOfProducts/ListOfProducts'
import { Container } from '../componets/container/Cotainer'
import { useStore } from '../hooks/useStore'

const CategoryPage = () => {
  const { category } = useParams()
  const { fetchProductsByCategory } = useStore()

  const products = useSelector((state) => state.category.categoryProducts)
  const status = useSelector((state) => state.category.categoryProductsStatus)

  useEffect(() => {
    fetchProductsByCategory({ category })
  }, [category])

  return (
    <Container>
      <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>{category.replace('-', ' ')}</div>
      {status === STATUS.LOADING && <div className='text-center text-3xl font-bold'>Loading...</div>}
      {products && <ListOfProducts products={products} />}
    </Container>
  )
}
export default CategoryPage
