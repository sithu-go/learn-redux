import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {
          cartItems.map(item => (
            <li key={item.id}>
              <CartItem {...item} total={item.totalPrice} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default CartItems;
