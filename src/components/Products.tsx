import { ProductData } from "../interfaces/Interfaces";
import ProductCard from "./ProductCard";

interface Props {
  productItems: ProductData[];
  handleAddProduct: (product: ProductData) => void;
}

function Products(props: Props) {
  return (
    <div>
      {props.productItems.map((product) => (
        <ProductCard
          handleAddProduct={props.handleAddProduct}
          key={product.id}
          productItem={product}
        />
      ))}
    </div>
  );
}

export default Products;
