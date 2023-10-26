import { useAppSelector } from './store'

export function useStateSearch() {
  const searchProducts = useAppSelector((state) => state.search.searchProducts)
  const searchStatus = useAppSelector(
    (state) => state.search.searchProductStatus
  )
  const searchError = useAppSelector((state) => state.search.error)

  return { searchError, searchProducts, searchStatus }
}
