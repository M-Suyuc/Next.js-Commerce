import { Options } from '@/types/enum.d'
import {
  type ProdcustWithQ,
  type ToggleCartQtyAction
} from '@/types/interface.d'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

function ShowLocalStorage() {
  if (typeof localStorage !== 'undefined') {
    const cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(cart)
    }
  } else {
    return []
  }
}

function LocalStorage(params: ProdcustWithQ[]) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(params))
    return
  }
}

interface CartState {
  productList: ProdcustWithQ[]
  productsCount: number
  totalAmount: number
}

const initialState: CartState = {
  productList: ShowLocalStorage(),
  productsCount: 0,
  totalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ProdcustWithQ>) => {
      const { id, quantity } = action.payload

      const findProduct = state.productList.find((item) => item.id === id)

      if (findProduct) {
        const tempCart = state.productList.map((product) => {
          if (product.id === id) {
            const tempQty: number = (product.quantity ?? 0) + (quantity || 0)
            const tempTotalPrice = tempQty * product.price

            return {
              ...product,
              quantity: tempQty,
              totalPrice: tempTotalPrice
            }
          } else {
            return product
          }
        })
        state.productList = tempCart
        LocalStorage(state.productList)
      } else {
        state.productList.push(action.payload)
        LocalStorage(state.productList)
      }
    },

    DeleteProduct: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      const delProduct = state.productList.filter(
        (item) => item.id !== action.payload
      )
      state.productList = delProduct
      LocalStorage(state.productList)
    },

    clearCart: (state) => {
      state.productList = []
      state.totalAmount = 0
      state.productsCount = 0
      LocalStorage(state.productList)
    },

    toggleCartQty: (state, action: PayloadAction<ToggleCartQtyAction>) => {
      const { id, option } = action.payload
      const tempCart = state.productList.map((product) => {
        if (product.id === id) {
          let tempQty: number = product.quantity || 0
          let tempTotalPrice = product.totalPrice

          if (option === Options.INC) {
            tempQty++
            tempTotalPrice = tempQty * product.price
          }

          if (option === Options.DEC) {
            tempQty--
            if (tempQty < 1) tempQty = 1
            tempTotalPrice = tempQty * product.price
          }

          return { ...product, quantity: tempQty, totalPrice: tempTotalPrice }
        } else {
          return product
        }
      })
      state.productList = tempCart
      LocalStorage(state.productList)
    },

    getCartTotal: (state) => {
      state.totalAmount = state.productList.reduce(
        (acumulador, currentvalue) => {
          if (currentvalue && currentvalue.totalPrice !== undefined) {
            acumulador += currentvalue.totalPrice
          }
          return acumulador
        },
        0
      )
    },

    getProductsCart: (state) => {
      if (Array.isArray(state.productList)) {
        state.productsCount = state.productList.reduce(
          (acumulador, currentValue) => {
            if (currentValue && currentValue.quantity !== undefined) {
              acumulador += currentValue.quantity
            }
            return acumulador
          },
          0
        )
      } else {
        console.error('state.productList no es un arreglo válido')
      }
    }
  }
})

export const {
  addCart,
  toggleCartQty,
  clearCart,
  DeleteProduct,
  getCartTotal,
  getProductsCart
} = cartSlice.actions

export default cartSlice.reducer
