import { useState, useEffect } from "react";
import { ProductData } from "../interfaces/Interfaces";
import ErrorBoundary from "./ErrorBoundary";
import ProductCard from "./ProductCard";
import "./Products.css";
import Skeleton from "./Skeleton";

interface Props {
  onAddProduct: (product: ProductData) => void;
}

function Products(props: Props) {
  const [products, setProducts] = useState<ProductData[]>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((products) => setProducts(products));
  }, []);

  if (products == null) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  } else {
    return (
      <div>
        <ErrorBoundary>
          {products.map((product) => (
            <ProductCard
              handleAddProduct={props.onAddProduct}
              key={product.id}
              productItem={product}
            />
          ))}
        </ErrorBoundary>
      </div>
    );
  }
}

export default Products;
