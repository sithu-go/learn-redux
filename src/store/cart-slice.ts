import { createSlice } from "@reduxjs/toolkit";
import { CartState, ProductStore } from "../types/product";

const initialState: CartState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem: ProductStore = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price; // Increment the total price based on the new item's price
      } else {
        // state.itemsList.push({
        //   id: newItem.id,
        //   name: newItem.name,
        //   quantity: 1,
        //   price: newItem.price,
        //   totalPrice: newItem.price,
        // });
        state.itemsList.push({...newItem, quantity: 1, totalPrice: newItem.price})
        state.totalQuantity++; // Increment the total quantity in the cart
      }
    },
    removeFromCart(state, action) {
      // Implement this reducer to remove items from the cart based on action.payload (item ID or index)
      const id = action.payload
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem) {
          if (existingItem.quantity === 1) {
            state.itemsList = state.itemsList.filter(item => item.id !== id)
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
