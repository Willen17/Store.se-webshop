import { Component } from "react";
import SectionCard from "./SectionCard";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

interface ProductData {
  title: string;
  id: number;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface Props {}

interface State {
  productsData: ProductData[];
}

// api goes here

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    const url = "https://fakestoreapi.com/products?limit=10"; // men's clothing
    const response = await fetch(url);

    const productsData = await response.json();

    this.setState({ productsData });
    console.log(this.state.productsData);
  }

  render() {
    return (
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
    );
  }
}

export default Main;

// randomPrice: number = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
// async componentDidMount() {
//   // Fetch images from API
//   const url = "https://api.unsplash.com/search/photos?page=1&query=landscape";
//   const response = await fetch(url, {
//     headers: {
//       Authorization: "Client-ID 5ZkcjZyK-7yptGcXOlS91s1s2a31zPil8AsqlKe-Zms",
//     },
//   });
//   const imagesData: ImageData[] = (await response.json()).results;

//   // Fetch liked images from LS
//   // const shoppingCart = JSON.parse(localStorage.shoppingCart || "[]");
//   const shoppingCart: ImageData[] = [];

//   this.setState({ imagesData, shoppingCart: shoppingCart });
// }

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

// addToCart(imageData: ImageData) {
//   const { shoppingCart: shoppingCart } = this.state;

//   // const copyOfCart = shoppingCart.filter((imageId) => imageId !== id);

//   const copyOfCart = shoppingCart;

//   copyOfCart.push(imageData);

//   this.setState({ shoppingCart: copyOfCart });
//   console.log(shoppingCart);
// }

// componentDidUpdate() {
//   // Write to LS
//   localStorage.shoppingCart = JSON.stringify(this.state.shoppingCart);
// }
