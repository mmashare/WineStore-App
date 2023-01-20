import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    askFor : "",
    priceRange:[],
  };

  
  export const ProductGetter = createSlice({
    name: 'Product',
    initialState,

    reducers: {
      PProduct: (state,action) => {
        state.askFor = action.payload;
      },
      PriceRange:(state,action)=>{
        state.priceRange = action.payload;
      }
    },
   
    
  });
  export const { PProduct,PriceRange} = ProductGetter.actions;
 
  export default ProductGetter.reducer;