import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
