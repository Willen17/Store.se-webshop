import { CSSProperties } from "react";
import "./SectionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface Props {
  src: string;
  alt: string;
  id: string;
  addToCart: () => void;
  randomPrice: number;
}

function SectionCard(props: Props) {
  const ShoppingCart: string[] = [];

  return (
    <div className="davidStyle">
      <div className="product-container">
        <img className="img" src={props.src} alt={props.alt} />
        {/* <i
          onClick={props.onToggleLiked}
          className={"icon " + (props.isLiked ? "liked" : "")}
        ></i> */}
        <div className="icons-container">
          <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
          <p className="card-price">{props.randomPrice}:-</p>
          <FontAwesomeIcon
            className="add-to-cart"
            icon={faCartPlus}
            // onClick={addToCart(props.id)}
            onClick={props.addToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
