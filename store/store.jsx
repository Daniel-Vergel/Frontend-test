import { configureStore } from '@reduxjs/toolkit'
import { menuSlice } from './slices/menuState/menuState'
import { ProductosSlice } from './slices/productosState/productosState'

export const store = configureStore({
  reducer: {
    menuState: menuSlice.reducer,
    productosState: ProductosSlice.reducer
  },
})