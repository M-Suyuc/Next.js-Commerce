import { useAppSelector } from './store'

export function useStateProducts() {
  const products = useAppSelector((state) => state.products.products)
  const singleProduct = useAppSelector((state) => state.products.singleProduct)
  const productsStatus = useAppSelector(
    (state) => state.products.productsStatus
  )
  const errorProducts = useAppSelector((state) => state.products.errorProducts)

  return { products, singleProduct, productsStatus, errorProducts }
}
