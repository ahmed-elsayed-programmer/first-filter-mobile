import { ProductState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items:[],
  searchQuery  : '',
  status:null,

} as ProductState ;


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    setItems: (state, action) => {
      state.items =  action.payload;
    },

    searchProduct: (state, action) => {      
      state.searchQuery = action.payload;
    },

    clearSearchProduct: (state) => {
      state.searchQuery = ''
    }
  }
})


export const {setItems , searchProduct , clearSearchProduct} = productsSlice.actions;
export default productsSlice.reducer;