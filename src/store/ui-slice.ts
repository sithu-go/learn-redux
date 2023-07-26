import { createSlice } from "@reduxjs/toolkit";
import { NotificationStore } from "../types/store";


const initialState: NotificationStore = {
    notification: null,
    changed: false,
    showCart: false
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            }
        },
        setChanged(state, action) {            
            state.changed = action.payload
        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;