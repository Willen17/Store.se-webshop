import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
