import { Component, createContext, useEffect, useState } from "react";
import SectionCard from "./SectionCard";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useOutletContext } from "react-router-dom";

export interface ProductData {
  title: string;
  id: number;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface Props {}

type ContextType = { products: ProductData[] | null };

function Main(props: Props) {
  const [products, setProducts] = useState<ProductData[] | null>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((result) => result.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <main>
      <div className="main-container">
        <Outlet context={{ products }} />
      </div>
    </main>
  );
}

export default Main;

export function useProducts() {
  return useOutletContext<ContextType>();
}
