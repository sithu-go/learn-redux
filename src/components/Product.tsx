import { useDispatch } from "react-redux";
import "./Product.css";
import { cartActions } from "../store/cart-slice";

interface ProductProps {
  id: number;
  name: string;
  imgURL: string,
  price: number,
}
const Product: React.FC<ProductProps> = ({ id, name, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      id,
      name,
      price,
    }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
