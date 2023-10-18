import { Product } from '@/types/interface.d'
import { BASE_URL, STATUS } from '@/utils'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// payload:PayloadAction<valor que devemos recibir  en el payload>

interface CategotiesState {
  categories: string[]
  categoriesStatus: string

  productsByCategory: Product[]
  productsByCategoryStatus: string

  error: string | undefined
}

const initialState: CategotiesState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,

  productsByCategory: [],
  productsByCategoryStatus: STATUS.IDLE,

  error: undefined
}

const categorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   -----------------Fetch Products----------------------
      .addCase(fetchAllCategories.pending, (state) => {
        state.categoriesStatus = STATUS.LOADING
      })
      .addCase(
        fetchAllCategories.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.categoriesStatus = STATUS.SUCCEEDED
          state.categories = action.payload
        }
      )
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.error = action.error.message
        state.categoriesStatus = STATUS.FAILED
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.productsByCategoryStatus = STATUS.LOADING
      })
      .addCase(
        fetchProductsByCategory.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.productsByCategory = action.payload
          state.productsByCategoryStatus = STATUS.SUCCEEDED
        }
      )
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.error = action.error.message
        state.productsByCategoryStatus = STATUS.FAILED
      })
  }
})

export const fetchAllCategories = createAsyncThunk(
  'categories/fetchcategories',
  async () => {
    const response = await fetch(`${BASE_URL}products/categories`)
    const data = await response.json()
    return data
  }
)

export const fetchProductsByCategory = createAsyncThunk(
  'category-products/fetch',
  async ({ category }: { category: string }) => {
    const response = await fetch(`${BASE_URL}products/category/${category}`)
    const data = await response.json()
    return data.products
  }
)

export default categorySlice.reducer
