import { createSlice } from "@reduxjs/toolkit";
import { CartState, ProductStore } from "../types/store";

const initialState: CartState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
  changed: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceData(state, action) {
      console.log(state, "OOO", action);
      
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {      
      const newItem: ProductStore = action.payload;
      state.changed = true

      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price; // Increment the total price based on the new item's price
      } else {
        state.itemsList.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++; // Increment the total quantity in the cart
      }
    },
    removeFromCart(state, action) {
      state.changed = true

      // Implement this reducer to remove items from the cart based on action.payload (item ID or index)
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemsList = state.itemsList.filter(
            (item) => item.id !== id
          );
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem?.price;
        }
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
