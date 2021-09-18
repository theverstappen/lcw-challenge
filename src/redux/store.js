import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product';
import pageReducer from './page';


const store =  configureStore({
  reducer: {
    products: productReducer,
    isFavPage: pageReducer
  },
})

export default store;