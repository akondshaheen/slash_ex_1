import React from "react";
import "./App.css";
import ProductPage from "./components/ProductInfo/productsPage";
import logo from "./image/logo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo"></img>
      </header>
      <div className="mainBody">
        <ProductPage />

        <p>
          Edit <code>src/App.js</code> Hello there.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
