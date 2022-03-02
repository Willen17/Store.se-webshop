import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { error } from "console";
import { ProductData } from "../interfaces/Interfaces";
import ErrorBoundary from "./ErrorBoundary";
import "./ProductCard.css";

interface Props {
  productItem: ProductData;
  handleAddProduct: (product: ProductData) => void;
}

function ProductCard(props: Props) {
  const productItem = props.productItem;

  return (
    <div className="davidStyle">
      <div className="product-container">
        <img className="img" src={productItem.image} alt={productItem.title} />
        <h1 className="product-title">{productItem.title}</h1>
        <p className="card-price">{productItem.price}$</p>
        <div className="icons-container">
          <FontAwesomeIcon
            className="add-to-cart"
            icon={faCartPlus}
            onClick={() => props.handleAddProduct(productItem)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
