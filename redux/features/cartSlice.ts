import { CartProduct } from "@/constants/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart: CartProduct[];
  totalQuantity: number;
  totalAmount: number;
}
interface UpdateQuantityPayload {
  id: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
    totalAmount: 0,
  } as CartState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalAmount = state.cart.reduce(
        (total, items) => total + Number(items.price) * Number(items.quantity),
        0
      );
    },

    increaseQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }

      state.totalQuantity++;
      state.totalAmount = state.cart.reduce(
        (total, items) => total + Number(items.price) * Number(items.quantity),
        0
      );
    },

    decreaseQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
      state.totalQuantity--;
      state.totalAmount = state.cart.reduce(
        (total, items) => total + Number(items.price) * Number(items.quantity),
        0
      );
    },

    removeItem: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.totalQuantity = state.cart.reduce(
        (total, items) => total + Number(items.quantity),
        0
      );
      state.totalAmount = state.cart.reduce(
        (total, items) => total + Number(items.price) * Number(items.quantity),
        0
      );
    },

    clearCard: (state) => {
      state.cart = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCard,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
