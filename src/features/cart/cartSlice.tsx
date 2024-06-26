import { createSlice } from "@reduxjs/toolkit";
import { FakeCart } from "../../modals/modal";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: any, action) {
      // payload-newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload=pizzaId
      state.cart = state.cart.filter(
        (item: FakeCart) => item.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      // payload=pizzaId
      const item: any = state.cart.find(
        (item: FakeCart) => item.pizzaId === action.payload
      );

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload=pizzaId
      const item: any = state.cart.find(
        (item: FakeCart) => item.pizzaId === action.payload
      );

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export function getTotalCartQuantity(state: any) {
  return state.cart.cart.reduce(
    (sum: number, item: FakeCart) => sum + item.quantity,
    0
  );
}

export function getTotalCartPrice(state: any) {
  return state.cart.cart.reduce(
    (sum: number, item: FakeCart) => sum + item.totalPrice,
    0
  );
}

export function getCart(state: any) {
  return state.cart.cart;
}

export function getCurrentQuantityById(id: number) {
  return (state: any) =>
    state.cart.cart.find((item: FakeCart) => item.pizzaId === id)?.quantity ??
    0;
}
