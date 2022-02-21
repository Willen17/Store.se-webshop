import { Component } from "react";
import Main from "./Main";
import "./SectionCard.css";

interface Props {}

interface state {}

class SectionCard extends Component {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="section-card">
        <img
          src="https://genesis-zone.com/media/cache/genesis_menu_product/Z23517_91075.png"
          alt="headphones"
        />
        <p>product</p>
      </div>
    );
  }
}
export default SectionCard;
