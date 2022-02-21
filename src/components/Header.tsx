import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <FontAwesomeIcon className="logo" icon={faTruckFast} />
      <div className="titleContainer">
        <h1 className="title">Konstgrossisten.se</h1>
      </div>
    </header>
  );
}

export default Header;
