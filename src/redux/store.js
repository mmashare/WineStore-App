// store.js
import { configureStore } from '@reduxjs/toolkit'
import arrowReducer from "./arrowSlice.js"
import  ProductGetter  from './productDetector.js'
export const store = configureStore({
  reducer: {
    arrows: arrowReducer,
    Product:ProductGetter,
  },
  // other options e.g middleware, go here
})