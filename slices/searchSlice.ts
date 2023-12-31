import { Product } from '@/types/interface.d'
import { BASE_URL, STATUS } from '@/utils'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface CategotiesState {
  searchProducts: Product[]
  searchProductStatus: string
  error: string | undefined
}

const initialState: CategotiesState = {
  searchProducts: [],
  searchProductStatus: STATUS.IDLE,
  error: undefined
}

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProduct.pending, (state) => {
        state.searchProductStatus = STATUS.LOADING
      })
      .addCase(
        fetchSearchProduct.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.searchProducts = action.payload
          state.searchProductStatus = STATUS.SUCCEEDED
        }
      )
      .addCase(fetchSearchProduct.rejected, (state, action) => {
        state.searchProductStatus = STATUS.FAILED
        state.error = action.error.message
      })
  }
})

export const fetchSearchProduct = createAsyncThunk(
  'searchProducts/fetch',
  async ({ search }: { search: string }) => {
    const response = await fetch(`${BASE_URL}products/search?q=${search}`)
    const data = await response.json()
    return data.products
  }
)

export default SearchSlice.reducer
