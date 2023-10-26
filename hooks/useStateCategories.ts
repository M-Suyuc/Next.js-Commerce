import { useAppSelector } from './store'

export function useStateCategories() {
  const categories = useAppSelector((state) => state.categories.categories)
  const productsByCategory = useAppSelector(
    (state) => state.categories.productsByCategory
  )
  const categoriesStatus = useAppSelector(
    (state) => state.categories.categoriesStatus
  )

  return { productsByCategory, categories, categoriesStatus }
}
