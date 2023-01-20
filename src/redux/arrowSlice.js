import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    toogle1:false,
    toogle2:false,
    toogle3:false,
  };

  
  export const arrowSlice = createSlice({
    name: 'arrows',
    initialState,

    reducers: {
      changeToggle1: (state,action) => {
        state.toogle1 = action.payload;
      },
      changeToggle2: (state,action) => {
        state.toogle2 = action.payload;
      },
      changeToggle3: (state,action) => {
        state.toogle3 = action.payload;
      },
    },
   
    
  });
  export const { changeToggle1,changeToggle2,changeToggle3 } = arrowSlice.actions;
 
  export default arrowSlice.reducer;