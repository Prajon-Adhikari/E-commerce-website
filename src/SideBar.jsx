import React, { useContext, useRef, useEffect, useState } from "react";
import { counterCartVAlue } from "./Context";
import { ProductData } from "./ProductData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const [totalValue, setTotalValue] = useState(0);
  const {
    setCartValue,
    setIsBtnClicked,
    setDisableBtn,
    idValue,
    cartValue,
    quantity,
    setQuantity,
    cartPanel,
    setCartPanel,
  } = useContext(counterCartVAlue);
  const sidebarRef = useRef(null);

  useEffect(() => {
    let initialTotal = 0;
    idValue.forEach((idVal) => {
      const product = ProductData.find((p) => p.id === idVal);
      if (product) {
        initialTotal += product.price * quantity[product.id];
      }
    });
    setTotalValue(initialTotal);
  }, [idValue, quantity]);

  function incrementQuantity(id, amount) {
    setQuantity((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setTotalValue((totalValue) => parseInt(totalValue) + parseInt(amount));
    setCartValue((cartValue) => cartValue + 1);
  }

  function decrementQuantity(id, amount) {
    if (quantity[id] === 1) {
      console.log("zero");
      setIsBtnClicked((prev) => {
        const { [id]: _, ...rest } = prev; // Destructure to exclude the clicked id
        return rest;
      });

      setDisableBtn((prev) => ({ ...prev, [id]: false }));
    }
    setQuantity((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    setTotalValue((totalValue) => parseInt(totalValue) + parseInt(amount));
    setCartValue((cartValue) => cartValue - 1);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setCartPanel(false); // Close the sidebar
        document.body.style.overflow = "auto"; // Enable scrolling again
      }
    }

    if (cartPanel) {
      // Add event listener for detecting clicks outside
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Remove event listener when the panel is closed or unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartPanel, setCartPanel]);

  function handleCloseCartPanel() {
    setCartPanel(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {cartPanel && (
        <div className="overlay" onClick={handleCloseCartPanel}></div>
      )}
      <div
        ref={sidebarRef}
        className={
          cartPanel
            ? " side-cart-bar  side-cart-bar-open"
            : " side-cart-bar ellapsed"
        }
      >
        {console.log(cartPanel)}
        <div>
          <p className="cart-text top-cart-panel">
            <p>Cart Items</p>
            <span className="xmark" onClick={handleCloseCartPanel}>
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </p>
          <p className="cart-text">Total Items: {cartValue}</p>
          {idValue.length > 0 ? (
            <div className="cartlist-container">
              {idValue.map((idVal, index) =>
                ProductData.map((products, index) =>
                  products.id == idVal ? (
                    quantity[products.id] > 0 ? (
                      <div className="cart-box-container" key={index}>
                        <div className="cart-image-container">
                          <img
                            src={products.image}
                            alt=""
                            className="cart-image"
                          />
                        </div>
                        <div className="cart-details">
                          <p className="cart-product-details">
                            {products.productName}
                          </p>
                          <p className="cart-product-details">
                            Rs : {products.price}
                          </p>
                          <div className="quantity-handler">
                            <button
                              className="plus-button"
                              onClick={() => {
                                incrementQuantity(products.id, products.price);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="plus-icon"
                              />
                            </button>
                            <p>{quantity[products.id]}</p>
                            <button
                              className="minus-button"
                              onClick={() => {
                                decrementQuantity(products.id, products.price);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faMinus}
                                className="minus-icon"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )
                )
              )}
            </div>
          ) : (
            <h2>Cart is empty</h2>
          )}
        </div>
        <div className="total">
          {" "}
          <div className="total-details">
            <p> Rs : {totalValue}</p>
            <p className="tax-details">inclusive all taxes</p>
          </div>
          <button>Pay Now</button>{" "}
        </div>
      </div>
    </>
  );
}
