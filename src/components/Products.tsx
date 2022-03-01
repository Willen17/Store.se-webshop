import { useState, useEffect } from "react";
import { ProductData } from "../interfaces/Interfaces";
import ProductCard from "./ProductCard";
import "./Products.css";
import Skeleton from "./Skeleton";

interface Props {
  onAddProduct: (product: ProductData) => void;
}

function Products(props: Props) {
  const [products, setProducts] = useState<ProductData[]>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((result) => result.json())
      .then((products) => setProducts(products));
  }, []);

  if (products == null) {
    // ["a", "b", "c", "d", "e"].map((id: string) => (
    // return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <div className="skeleton" />);
    return (
      <div>
        <Skeleton />
      </div>
    );
  } else {
    return (
      <div>
        {products.map((product) => (
          <ProductCard
            handleAddProduct={props.onAddProduct}
            key={product.id}
            productItem={product}
          />
        ))}
      </div>
    );
  }
}

export default Products;
