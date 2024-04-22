import { createSlice } from '@reduxjs/toolkit'


export const ProductosSlice = createSlice({
  name: 'productosState',
  initialState: {
    page: 0 ,
    isLoading: false,
    productos: [],
  },

  reducers: {
    startLoadingProducts: (state) => {
        state.isLoading = true;
    },

    setProducts: (state, actions) => {
        state.isLoading = false;
        state.page = actions.payload.page;
        state.productos = actions.payload.productos;
    },

  
  },
})


export const { startLoadingProducts, setProducts } = ProductosSlice.actions