import React, { useContext } from "react";
import { counterCartVAlue } from "./Context";

export default function Product(props) {
  const value = useContext(counterCartVAlue);
  const { id, image, productName, price } = props.data;
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={image} alt="" className="product-img" />
      </div>
      <div className="product-information">
        <div className="info">
          <h3>{productName}</h3>
          <h3>Rs. {price}</h3>
        </div>
        <button
          className="add-button"
          onClick={() => value.handleCartValue(id)}
        >
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
}
