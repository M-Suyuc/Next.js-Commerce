import { useAppSelector } from './store'

export function useStateCart() {
  const cartProducts = useAppSelector((state) => state.cart.productList)
  const cartTotalAmount = useAppSelector((state) => state.cart.totalAmount)
  const cartProductsCount = useAppSelector((state) => state.cart.productsCount)

  return { cartProducts, cartTotalAmount, cartProductsCount }
}
