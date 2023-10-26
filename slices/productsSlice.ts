import { TypesData, Product } from '@/types/interface.d'
import { BASE_URL, STATUS } from '@/utils'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductsState {
  products: Product[]
  singleProduct: Product
  productsStatus: string
  errorProducts: string | undefined
}

const initialState: ProductsState = {
  products: [],
  productsStatus: STATUS.IDLE,
  errorProducts: undefined,
  singleProduct: {} as Product
}

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   -----------------Fetch Products----------------------
      .addCase(fetchAllProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(
        fetchAllProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.productsStatus = STATUS.SUCCEEDED
          state.products = action.payload
        }
      )
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED
        state.errorProducts = action.error.message
      })
      //   -----------------Fetch Single Product----------------------
      .addCase(fetchSingleProduct.pending, (state) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(
        fetchSingleProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.productsStatus = STATUS.SUCCEEDED
          state.singleProduct = action.payload
        }
      )
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED
        state.errorProducts = action.error.message
      })
  }
})

export const fetchAllProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(`${BASE_URL}products?limit=25`)
    const data = (await response.json()) as TypesData
    return data.products
  }
)

export const fetchSingleProduct = createAsyncThunk(
  'singleProduct/fetchSingleProduct',
  async ({ id }: { id: string }) => {
    const response = await fetch(`${BASE_URL}products/${id}`)
    const data = (await response.json()) as Product
    return data
  }
)

export default productsSlice.reducer
