import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductData } from "../interfaces/Interfaces";
import "./Cart.css";
import ErrorBoundary from "./ErrorBoundary";

interface Props {
  cartItems: ProductData[];
  onAddProduct: (product: ProductData) => void;
  onRemoveProduct: (product: ProductData) => void;
}

function Cart(props: Props) {
  const totalCost = props.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-main">
      <div className="shopping-cart-container">
        <div className="shopping-cart-header">
          <h1>Varukorg</h1>
        </div>
        <div className="shopping-cart-item"></div>
        {props.cartItems.map((cartItem) => (
          <div key={cartItem.id} className="shopping-cart-item">
            <img
              className="product-img"
              src={cartItem.image}
              alt={cartItem.title}
            />
            <ul className="product-info-title">
              <li>{cartItem.title}</li>
            </ul>
            <ul className="product-info">
              <li>{cartItem.quantity}</li>
              <li>{cartItem.price} $</li>
              <li>{cartItem.price * cartItem.quantity} $</li>
            </ul>
            <div className="cart-icons-container">
              <FontAwesomeIcon
                className="cart-icons"
                icon={faPlusSquare}
                onClick={() => props.onAddProduct(cartItem)}
              />
              <FontAwesomeIcon
                className="cart-icons"
                icon={faMinusSquare}
                onClick={() => props.onRemoveProduct(cartItem)}
              />
            </div>
          </div>
        ))}
        <div className="totalprice">
          <p className="price">Total: {Math.round(totalCost)} $</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
