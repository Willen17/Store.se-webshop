import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
