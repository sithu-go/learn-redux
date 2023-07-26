import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { uiActions } from "../store/ui-slice";
const Cart = () => {
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);
    
  const dispatch = useDispatch();
  return (
    <div className="cartIcon" onClick={() => dispatch(uiActions.setShowCart())}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
