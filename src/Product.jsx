import React from "react";


export default function Product(props) {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={props.image} alt="" className="product-img" />
      </div>
      <div className="product-information">
        <div className="info">
          <h3>{props.productName}</h3>
          <h3>Rs. {props.price}</h3>
        </div>
        <button className="add-button" onClick={props.onAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
