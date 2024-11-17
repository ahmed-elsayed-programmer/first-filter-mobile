import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import ProductReducer from "./features/productSlice";
import { apiSlice } from "./services/apiSlice";
import { cartReducer } from "./features/cartSlice";

export const makeStore = () => configureStore({
  reducer:{
  [apiSlice.reducerPath]: apiSlice.reducer,
   auth: authReducer,
   products:ProductReducer,
   cart: cartReducer,
  },
  middleware:getDefaultMiddleware => getDefaultMiddleware() .concat(apiSlice.middleware),
  devTools: true
})


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
