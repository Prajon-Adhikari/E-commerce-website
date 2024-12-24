import React, { useContext, useRef, useEffect, useState } from "react";
import { counterCartVAlue } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export default function SideBar() {
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
    totalValue,
    showPaymentModal,
    setTotalValue,
    setShowPaymentModal,
  } = useContext(counterCartVAlue);
  const sidebarRef = useRef(null);

  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        console.log(response.data);
        setProducts(response.data); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let initialTotal = 0;
    idValue.forEach((idVal) => {
      const product = products.find((p) => p._id === idVal);
      if (product) {
        console.log("p", product);
        initialTotal += product.productPrice * quantity[product._id];
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
          {console.log("idValue:", idValue)} {/* Logs the current idValue */}
          {console.log("Products:", products)}{" "}
          {/* Logs the current products array */}
          {idValue.length > 0 ? (
            <div className="cartlist-container">
              {idValue.map((idVal, index) =>
                products.map((product, index) =>
                  product._id === idVal ? (
                    quantity[product._id] > 0 ? (
                      <div className="cart-box-container" key={index}>
                        <div className="cart-image-container">
                          <img
                            src={`http://localhost:3000/${product.productImage}`}
                            alt=""
                            className="cart-image"
                          />
                        </div>
                        <div className="cart-details">
                          <p className="cart-product-details">
                            {product.productName}
                          </p>
                          <p className="cart-product-details">
                            Rs : {product.productPrice}
                          </p>
                          <div className="quantity-handler">
                            <button
                              className="plus-button"
                              onClick={() => {
                                incrementQuantity(
                                  product._id,
                                  product.productPrice
                                );
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="plus-icon"
                              />
                            </button>
                            <p>{quantity[product._id]}</p>
                            <button
                              className="minus-button"
                              onClick={() => {
                                decrementQuantity(
                                  product._id,
                                  product.productPrice
                                );
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
          <Link to="/payment">
            <button onClick={() => setShowPaymentModal(true)}>Pay Now</button>{" "}
          </Link>
        </div>
      </div>
      {showPaymentModal && (
        <div className="payment-modal">
          <div className="payment-modal-overlay"></div>
          <div className="payment-modal-content">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
