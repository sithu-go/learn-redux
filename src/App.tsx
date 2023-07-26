import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { RootState, useAppDispatch } from "./store";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";

function App() {
  const dispatch = useAppDispatch();

  const notification = useSelector((state: RootState)=> state.ui.notification)
  const cart = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    console.log("QUE");
    
    dispatch(fetchData())
    
  }, [dispatch])

  useEffect(() => {    
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }

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
