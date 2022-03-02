import { faTruckFast, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <FontAwesomeIcon className="logo" icon={faTruckFast} />
      </Link>
      <div className="titleContainer">
        <Link style={linkStyle} to="/">
          <h1 className="title linkStyle">store.se</h1>
        </Link>
      </div>
      <Link to="/cart">
        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
      </Link>
    </header>
  );
}

const linkStyle: CSSProperties = {
  color: "#eee",
  textDecoration: "none",
};

export default Header;
