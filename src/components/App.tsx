import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Layout from "./Layout";
import Store from "./Store";

// Vi vill skicka data (shoppingCart[]) från Main till App, sen från App till ShoppingCart.tsx

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Store />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
