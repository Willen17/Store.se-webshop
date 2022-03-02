import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
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

  function addedToCart(productItem: ProductData) {
    props.handleAddProduct(productItem);
    addToCartAnimation();
  }

  function addToCartAnimation() {
    if (document.querySelector(".add-to-cart-animation")) {
      document.querySelector(".add-to-cart-animation")?.remove();
    }
    const newElement = document.createElement("p");
    newElement.innerText = "📦";
    newElement.classList.add("add-to-cart-animation");
    document.querySelector(".Header")?.appendChild(newElement);
  }

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
            onClick={() => addedToCart(productItem)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
