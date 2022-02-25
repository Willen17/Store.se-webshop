import React, { createElement } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItem";

interface Props {}

function ShoppingCart(props: Props) {
  return (
    <div className="shopping-cart-main">
      <div className="shopping-cart-container">
        <div className="shopping-cart-header">
          <h1>Varukorg</h1>
          <h1>Items</h1>
        </div>
        <div className="shopping-cart-item">
          <ul className="product-info-title">
            <li>Produkter</li>
          </ul>
          <ul className="product-info">
            <li>Antal</li>
            <li>Pris</li>
            <li>Total</li>
          </ul>
        </div>
        <div className="productCard">
          {/* {props.shoppingCart.length === 0 ? (
            <p>Inga produkter i varukorgen</p>
          ) : null}
          {props.shoppingCart.map((asd) => (
            <CartItem />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
