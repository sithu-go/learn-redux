import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { RootState } from "./store";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
let isFirstRender = 0;
function App() {
  const dispatch = useDispatch();

  const notification = useSelector((state: RootState)=> state.ui.notification)
  const cart = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    const sendRequest = async () => {      
      if (isFirstRender < 2) {
        isFirstRender++
        return
      }
      // Send state as Sending request
      dispatch(uiActions.showNotification({
        open: true,
        message: "sending request",
        type: 'warning',
      }))

      const res = await fetch("https://redux-http-dfa3f-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json", {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      await res.json()      

      // Send state as Request is successful
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sent request to Database Successfully",
        type: 'success',
      }))

    }

    sendRequest().catch(() => {
      // Send state as Error
      dispatch(uiActions.showNotification({
        open: true,
        message: "sending request failed",
        type: 'error',
      }))
    });
  }, [cart])

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  return (
    <div className="App">
      { notification && <Notification type={notification.type} message={notification.message} />}
      
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
