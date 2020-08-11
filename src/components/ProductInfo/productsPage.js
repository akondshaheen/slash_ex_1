import React from "react";
import "./products.css";
import Product from "./product";

const ProductPage = () => {
  return (
    <div className="main">
      <div className="center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductPage;
