import { configureStore } from "@reduxjs/toolkit"

import authSlice from "./auth-slice"
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export default store;
