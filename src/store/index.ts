import { createStore, Reducer } from "redux";
import { AppAction, AppState } from "../types/store";


const reducerFn: Reducer<AppState, AppAction> = (state = { counter: 10 }, action) => {
    // Synchronous Function
    // We should not mutate the original state.
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 };
        case "DECREMENT":
            return { counter: state.counter - 1 };
        case "ADD":
            return { counter: state.counter + action.payload }
        default:
            console.log("HEHE");

            return state;
    }
};

export const store = createStore(reducerFn);

// Define RootState type using ReturnType utility
export type RootState = ReturnType<typeof reducerFn>;