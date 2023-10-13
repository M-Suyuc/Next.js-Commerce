import { createSlice } from '@reduxjs/toolkit'

function ShowLocalStorage() {
  const cart = window.localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(window.localStorage.getItem('cart'))
  } else {
    return []
  }
}

function LocalStorage(params) {
  window.localStorage.setItem('cart', JSON.stringify(params))
}

const initialState = {
  productList: ShowLocalStorage(),
  productsCount: 0,
  totalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { id, quantity } = action.payload

      const findProduct = state.productList.find((item) => item.id === id)

      if (findProduct) {
        const tempCart = state.productList.map((product) => {
          if (product.id === id) {
            const tempQty = product.quantity + quantity
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

    DeleteProduct: (state, action) => {
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

    toggleCartQty: (state, action) => {
      const { id, option } = action.payload
      const tempCart = state.productList.map((product) => {
        if (product.id === id) {
          let tempQty = product.quantity
          let tempTotalPrice = product.totalPrice

          if (option === 'INC') {
            tempQty++
            tempTotalPrice = tempQty * product.price
          }

          if (option === 'DEC') {
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
          acumulador += currentvalue.totalPrice
          return acumulador
        },
        0
      )
    },

    getProductsCart: (state) => {
      state.productsCount = state.productList.reduce(
        (acumulador, currentvalue) => {
          acumulador += currentvalue.quantity
          return acumulador
        },
        0
      )
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
