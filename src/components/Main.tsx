import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import "./Main.css";
import { useState } from "react";
import { ProductData } from "../interfaces/Interfaces";
import Cart from "./Cart";
import ErrorBoundary from "./ErrorBoundary";

function Main() {
  const [cartItems, setCartItems] = useState<ProductData[]>([]);

  function handleAddProduct(product: ProductData) {
    const productExists = cartItems.find((item) => item.id === product.id);
    // If the product already exist we won't add it to the array again,
    // we will just set its quantity to plus one
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(product: ProductData) {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (!productExists) return;

    if (productExists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...productExists, quantity: productExists.quantity - 1 };
          }
          return item;
        })
      );
    }
  }

  return (
    <main>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<Products onAddProduct={handleAddProduct} />}
          />
          <Route
            path="/cart"
            element={
              <ErrorBoundary>
                <Cart
                  onAddProduct={handleAddProduct}
                  onRemoveProduct={handleRemoveProduct}
                  cartItems={cartItems}
                />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
