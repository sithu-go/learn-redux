import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
import { uiActions } from "../store/ui-slice";

interface CartItemProps {
  id: number;
  name: string;
  quantity?: number;
  total?: number;
  price?: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, quantity, total, price }) => {
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(cartActions.removeFromCart(id))
    dispatch(uiActions.setChanged(true))
  }

  const incrementHandler = () => {
    dispatch(cartActions.addToCart({
      id,
      name,
      price,
    }))

    dispatch(uiActions.setChanged(true))
  }
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementHandler}>
        -
      </button>
      <button className="cart-actions" onClick={incrementHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
