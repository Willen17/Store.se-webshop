import { Component } from "react";
import SectionCard from "./SectionCard";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  likedImages: string[];
}

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { imagesData: [], likedImages: [] };
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
    const likedImages = JSON.parse(localStorage.likedImages || "[]");

    this.setState({ imagesData, likedImages });
  }

  toggleLikedImage(id: string) {
    const { likedImages } = this.state;

    // Remove/Copy
    const newList = likedImages.filter((imageId) => imageId !== id);

    // Add
    if (newList.length === likedImages.length) {
      newList.push(id); // It's ok to mutate newList since we made a copy above.
    }

    this.setState({ likedImages: newList });
  }

  componentDidUpdate() {
    // Write to LS
    localStorage.likedImages = JSON.stringify(this.state.likedImages);
  }

  render() {
    return (
      <main>
        <div className="main-container">
          {this.state.imagesData.map((imageData) => (
            <SectionCard
              isLiked={this.state.likedImages.includes(imageData.id)}
              key={imageData.id}
              src={imageData.urls.regular}
              alt={imageData.alt_description}
              onToggleLiked={() => this.toggleLikedImage(imageData.id)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
