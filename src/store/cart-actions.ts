import { Dispatch } from "react";
import { Action } from "redux";
import { CartState } from "../types/store";
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchData = () => {
    return async (dispatch: Dispatch<Action>) => {
        // dispatch()
        const fetchHandler = async () => {
            const res = await fetch("https://redux-http-dfa3f-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json");
            const data = await res.json();
            return data
        }

        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "sending request failed",
                    type: "error",
                })
            );
        }
    }
}

// Action creator using createAsyncThunk
// thunk pattern
export const sendCartData = (cart: CartState) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sending request To Database",
                type: "warning",
            })
        );

        const sendRequest = async () => {
            const res = await fetch(
                "https://redux-http-dfa3f-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            await res.json();

            // Send state as Request is successful
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "Sent request to Database Successfully",
                    type: "success",
                })
            );
        };

        try {
            await sendRequest();
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "sending request failed",
                    type: "error",
                })
            );
        }

    };
};