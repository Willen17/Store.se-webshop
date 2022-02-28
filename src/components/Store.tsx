import { createContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ProductData, useProducts } from "./Main";
import SectionCard from "./SectionCard";

function Store() {
  const { products } = useProducts();

  const [shoppingCart, setShoppingCart] = useState<ProductData[] | null>([]);

  function addToCart(product: ProductData): void {
    const copyOfCart = shoppingCart;
    copyOfCart?.push(product);
    setShoppingCart(copyOfCart);
    console.log(shoppingCart);
  }

  return (
    <div>
      {products?.map((product) => (
        <SectionCard
          key={product.id}
          addToCart={addToCart}
          productInfo={product}
        />
      ))}
    </div>
  );
}

export default Store;
