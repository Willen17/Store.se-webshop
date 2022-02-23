import { CSSProperties } from "react";
import "./SectionCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isLiked: boolean;
  src: string;
  alt: string;
  onToggleLiked: () => void;
}

function SectionCard(props: Props) {
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
          <FontAwesomeIcon className="add-to-cart" icon={faCartPlus} />
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
