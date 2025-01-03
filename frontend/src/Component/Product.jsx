import React, { useContext } from "react";
import { counterCartVAlue } from "./Context";
import tick from "../assets/double-check.png";

export default function Product(props) {
  const value = useContext(counterCartVAlue);
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img
          src={`http://localhost:3000/${props.data.productImage}`}
          alt=""
          className="product-img"
        />
      </div>
      <div className="product-information">
        <div className="info">
          <h3>{props.data.productName}</h3>
          <h3>Rs. {props.data.productPrice}</h3>
        </div>
        {value.isBtnClicked[props.data._id] ? (
          <button
            className="added-button"
            onClick={() => value.handleCartValue(props.data._id)}
            disabled
          >
            <>
              Added{" "}
              {value.isBtnClicked[props.data._id] ? (
                <img src={tick} alt="tick" className="tick-img" />
              ) : (
                ""
              )}
            </>
          </button>
        ) : (
          <button
            className="add-button"
            onClick={() => value.handleCartValue(props.data._id)}
          >
            <span> Add To Cart</span>
          </button>
        )}
      </div>
    </div>
  );
}
