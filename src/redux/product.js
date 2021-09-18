import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    hasErrors: false,
    page: 1,
    products: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: state => {
        state.loading = true
    },
    getProductsSuccess: (state, { payload }) => {
        state.products = payload
        state.loading = false
        state.hasErrors = false
    },
    getProductsFailure: state => {
        state.loading = false
        state.hasErrors = true
    },
    handleFavorite: (state, action) => {
     state.products.forEach((product) => {
        if(product.id === action.payload){
           product.isFavorite === 1 ? product.isFavorite = 0 : product.isFavorite = 1
        }
      })
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    addOrRemoveBasket: (state, action) => {
      state.products.forEach((product) => {
         if(product.id === action.payload.id){
            product.isBasket = 1;
            const count = parseInt(product.count) + action.payload.val;
            product.count = count;
         }
       })
       localStorage.setItem('products', JSON.stringify(state.products))
    },
    removeProductFromBasket: (state, action) => {
      const {id, addToFavorites} = action.payload;
      state.products.forEach((product) => {
        if(product.id === id){
           product.isBasket = 0;
           product.count = 0;
           if(addToFavorites) product.isFavorite = 1;
        }
      })
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    sortProducts: (state, action) => {
      switch(action.payload) {
        case 'asc':
           state.products.sort((a, b) => a.price - b.price);
          break;
        case 'desc':
          state.products.sort((a, b) => b.price - a.price);
          break;
        default:
      }
     
    },

  },
})

export const { handleFavorite, getProducts, getProductsFailure, getProductsSuccess,addOrRemoveBasket,removeProductFromBasket,sortProducts } = productSlice.actions

export const productSelector = state => state.products

export default productSlice.reducer

export function checkLocalStorage() {
    return async dispatch => {
      try {
        const storage = localStorage.getItem('products')
        if(storage){
          dispatch(getProducts())
          dispatch(getProductsSuccess(JSON.parse(storage)))
        }
        else {
          dispatch(fetchProducts());
        }
      } catch (error) {
        dispatch(getProductsFailure())
      }
    }
  }

  function fetchProducts() {
    return async dispatch => {
      dispatch(getProducts())
  
      try {
        const response = await fetch('https://mocki.io/v1/9461147d-f7b6-4870-98a8-986b76efac2b')
        const data = await response.json()
        dispatch(getProductsSuccess(data))
      } catch (error) {
        dispatch(getProductsFailure())
      }
    }
  }