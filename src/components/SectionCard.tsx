import "./SectionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { ProductData } from "./Main";

interface Props {
  productInfo: ProductData;
  addToCart: (product: ProductData) => void;
}

function SectionCard(props: Props) {
  return (
    <div className="davidStyle">
      <div className="product-container">
        <img
          className="img"
          src={props.productInfo.image}
          alt={props.productInfo.title}
        />
        <h1 className="product-title">{props.productInfo.title}</h1>
        <p className="card-price">{props.productInfo.price}$</p>
        <div className="icons-container">
          <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
          <FontAwesomeIcon
            onClick={() => props.addToCart(props.productInfo)}
            className="add-to-cart"
            icon={faCartPlus}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
