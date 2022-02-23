import { Component } from "react";
import SectionCard from "./SectionCard";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

interface ImageData {
  id: string;
  alt_description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}

interface Props {}
interface State {
  imagesData: ImageData[];
  shoppingCart: string[];
}

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { imagesData: [], shoppingCart: [] };
  }

  async componentDidMount() {
    // Fetch images from API
    const url = "https://api.unsplash.com/search/photos?page=1&query=landscape";
    const response = await fetch(url, {
      headers: {
        Authorization: "Client-ID 5ZkcjZyK-7yptGcXOlS91s1s2a31zPil8AsqlKe-Zms",
      },
    });
    const imagesData: ImageData[] = (await response.json()).results;

    // Fetch liked images from LS
    // const shoppingCart = JSON.parse(localStorage.shoppingCart || "[]");
    const shoppingCart: string[] = [];

    this.setState({ imagesData, shoppingCart: shoppingCart });
  }

  // toggleLikedImage(id: string) {
  //   const { shoppingCart: shoppingCart } = this.state;

  //   // Remove/Copy
  //   const newList = shoppingCart.filter((imageId) => imageId !== id);

  //   // Add
  //   if (newList.length === shoppingCart.length) {
  //     newList.push(id); // It's ok to mutate newList since we made a copy above.
  //   }

  //   this.setState({ shoppingCart: newList });
  // }

  addToCart(id: string) {
    const { shoppingCart: shoppingCart } = this.state;

    // const copyOfCart = shoppingCart.filter((imageId) => imageId !== id);

    const copyOfCart = shoppingCart;

    if (copyOfCart.length === shoppingCart.length) {
      copyOfCart.push(id);
    }

    this.setState({ shoppingCart: copyOfCart });
    console.log(shoppingCart);
  }

  // componentDidUpdate() {
  //   // Write to LS
  //   localStorage.shoppingCart = JSON.stringify(this.state.shoppingCart);
  // }

  randomPrice: number = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;

  render() {
    return (
      <main>
        <Link to="shoppingCart">
          <div className="cart-icon-container">
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
          </div>
        </Link>
        {/* <ShoppingCart shoppingCart={this.state.shoppingCart} /> */}
        <div className="main-container">
          <Outlet />
          {this.state.imagesData.map((imageData) => (
            <SectionCard
              key={imageData.id}
              src={imageData.urls.regular}
              alt={imageData.alt_description}
              id={imageData.id}
              addToCart={() => this.addToCart(imageData.id)}
              randomPrice={this.randomPrice}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
