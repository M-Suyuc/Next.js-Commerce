import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '@/slices/productsSlice'
import categoryReducer from '@/slices/categoriesSlice'
import cartReducer from '@/slices/cartSlice'
import searchReducer from '@/slices/searchSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
    search: searchReducer
  }
  // middleware:
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
