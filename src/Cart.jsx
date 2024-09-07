import React, { useContext, useState } from "react";
import { counterCartVAlue } from "./Context";
import { ProductData } from "./ProductData";

export default function Cart() {
  const [totalValue, setTotalValue] = useState(0);
  const { idValue, cartValue } = useContext(counterCartVAlue);

  function handleTotalVAlue(amount) {
    setTotalValue((totalValue) => parseInt(totalValue) + parseInt(amount));
  }

  return (
    <div className="cart-page">
      <h2>Cart Items</h2>
      <p>Total Items: {cartValue}</p>
      {idValue.length > 0 ? (
        <div className="cartlist-container">
          {idValue.map((idVal, index) =>
            ProductData.map((products, index) =>
              products.id == idVal ? (
                <div className="cart-box-container" key={index}>
                  <div className="cart-image-container">
                    <img
                      src={products.image}
                      alt=""
                      className="cart-image"
                      onLoad={() => handleTotalVAlue(products.price)}
                    />
                  </div>
                  <div className="cart-details">
                    <p>{products.productName}</p>
                    <p>Rs : {products.price}</p>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          )}
          <p className="total">Total = Rs : {totalValue} </p>
        </div>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </div>
  );
}
