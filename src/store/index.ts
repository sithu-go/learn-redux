import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }
    },
})

export const actions = counterSlice.actions;

// Define RootState type using ReturnType utility
export type RootState = ReturnType<typeof counterSlice.reducer>;

export const store = configureStore({
    reducer: counterSlice.reducer,
});