import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import "./Main.css";
import { useEffect, useState } from "react";
import { ProductData } from "../interfaces/Interfaces";
import Cart from "./Cart";

function Main() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [cartItems, setCartItems] = useState<ProductData[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((result) => result.json())
      .then((products) => setProducts(products));
  }, []);

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

  //   function handleRemoveProduct(product: ProductData) {
  //     const productExists = cartItems.find((item) => item.id === product.id);
  //     if (productExists?.quantity === 1) {
  //       setCartItems(cartItems.filter((item) => item.id !== product.id));
  //     } else {
  //       setCartItems(
  //         cartItems.map((item) =>
  //           item.id === product.id
  //             ? { ...productExists, quantity: productExists.quantity - 1 }
  //             : item
  //         )
  //       );
  //     }
  //   }

  return (
    <main>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <Products
                handleAddProduct={handleAddProduct}
                productItems={products}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart handleAddProduct={handleAddProduct} cartItems={cartItems} />
            }
          />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
