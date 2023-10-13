import { BASE_URL, STATUS } from '@/utils'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface CategotiesState {
  searchProduct: string[]
  searchProductStatus: string
  error: string | undefined
}

const initialState: CategotiesState = {
  searchProduct: [],
  searchProductStatus: STATUS.IDLE,
  error: undefined
}

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProduct.pending, (state, action) => {
        state.searchProductStatus = STATUS.LOADING
      })
      .addCase(fetchSearchProduct.fulfilled, (state, action) => {
        state.searchProduct = action.payload
        state.searchProductStatus = STATUS.SUCCEEDED
      })
      .addCase(fetchSearchProduct.rejected, (state, action) => {
        state.searchProductStatus = STATUS.FAILED
        state.error = action.error.message
      })
  }
})

export const fetchSearchProduct = createAsyncThunk(
  'searchProduct/fetch',
  async (productSearch) => {
    const response = await fetch(
      `${BASE_URL}products/search?q=${productSearch}`
    )
    const data = await response.json()
    return data.products
  }
)

export default SearchSlice.reducer
