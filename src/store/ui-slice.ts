import { createSlice } from "@reduxjs/toolkit";
import { NotificationStore } from "../types/store";


const initialState: NotificationStore = {
    notification: null,
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
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;