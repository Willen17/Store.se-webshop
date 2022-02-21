import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
