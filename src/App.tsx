import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route
              path="shoppingCart"
              element={<ShoppingCart shoppingCart={[]} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="App">
        <Footer />
      </div>
    </div>
  );
}

export default App;
