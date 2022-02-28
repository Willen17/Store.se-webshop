import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const linkStyle: CSSProperties = {
    color: "#eee",
    textDecoration: "none",
  };
  return (
    <header className="Header">
      <Link style={linkStyle} to="">
        <FontAwesomeIcon className="logo" icon={faTruckFast} />
      </Link>
      <div className="titleContainer">
        <Link style={linkStyle} to="">
          <h1 className="title linkStyle">AliBaba.se</h1>
        </Link>
      </div>
      <Link to="shoppingCart">
        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
      </Link>
    </header>
  );
}

export default Header;
