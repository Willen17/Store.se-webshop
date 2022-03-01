import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import { ProductData } from "../interfaces/Interfaces";
import "./Cart.css";

interface Props {
  cartItems: ProductData[];
  handleAddProduct: (product: ProductData) => void;
}

function Cart(props: Props) {
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const costTotal = totalCost;
    props.cartItems.map((cartitem) => setTotalCost(cartitem.price + costTotal));
  }, [props.cartItems]);
  // useEffect(() => {
  //   props.cartItems.map((cartItem) => setTotalCost(totalCost + cartItem.price));
  // }, [props.cartItems, totalCost]);

  // props.cartItems.map((cartItem) => setTotalCost(totalCost + cartItem.price));

  return (
    <div className="shopping-cart-main">
      <div className="shopping-cart-container">
        <div className="shopping-cart-header">
          <h1>Varukorg</h1>
          <h1>Items</h1>
        </div>
        <div className="shopping-cart-item">
          <ul className="product-info-title">
            <li style={{ fontWeight: "bold" }}>Produkter</li>
          </ul>
          <ul className="product-info">
            <li style={{ fontWeight: "bold" }}>Antal</li>
            <li style={{ fontWeight: "bold" }}>Pris</li>
            <li style={{ fontWeight: "bold" }}>Total</li>
          </ul>
        </div>
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
                onClick={() => props.handleAddProduct(cartItem)}
              />
              <FontAwesomeIcon
                className="cart-icons"
                icon={faMinusSquare}
                // onClick={() => props.handleRemoveProduct(cartItem)}
              />
            </div>
          </div>
        ))}
        <p>Total: {totalCost} $</p>
      </div>
    </div>
  );
}

export default Cart;
