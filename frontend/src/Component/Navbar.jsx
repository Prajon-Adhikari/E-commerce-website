import React, { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import {
  faSearch,
  faUser,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { counterCartVAlue } from "./Context";
import { ProductData } from "./ProductData";

export default function Navbar() {
  const productList = ProductData.map((products) => products.productName);
  const data = useContext(counterCartVAlue);
  const [productName, setProductName] = useState(productList);
  const [displayList, setDisplayList] = useState(false);

  const inputRef = useRef(null);

  const location = useLocation();

  const { userName } = location.state || {};

  function handleSearchVal(event) {
    data.setSearchVal(event.target.value);
    setDisplayList(true);
    if (data.searchVal === "") {
      setProductName(productList);
      return;
    }
    const filterBySearch = productList.filter((item) => {
      if (item.toLowerCase().includes(data.searchVal.toLowerCase())) {
        return item;
      }
    });
    setProductName(filterBySearch);
  }

  function handleHideList() {
    setDisplayList(false);
  }

  function clearSearchVal() {
    data.setProductsItem("");
    data.setSearchVal("");
    setDisplayList(false);
  }

  function handleCartPanel() {
    data.setCartPanel(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="navbar-container">
      <h4>E-COMMERCE</h4>
      <div className="nav-elements">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          HOME
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          ABOUT US
        </Link>
        <Link to="/">
          <select
            name=""
            id=""
            className="dropdown"
            onChange={(e) => data.handleCategoryItem(e.target.value)}
          >
            <option value="">CATEGORY</option>
            <option value="airpod">AIRPOD</option>
            <option value="bag">BAG</option>
            <option value="bottle">BOTTLE</option>
            <option value="watch">WATCH</option>
            <option value="laptop">LAPTOP</option>
            <option value="speaker">SPEAKER</option>
            <option value="shoes">SHOES</option>
            <option value="t-shirt">T-SHIRT</option>
          </select>
        </Link>
        <Link
          to="/blogs"
          className={location.pathname === "/blogs" ? "active-link" : ""}
        >
          BLOGS
        </Link>
      </div>
      <div className="right-nav-elements right-elements">
        <div className="searchbar-container">
          <div className="search-bar-container">
            <input
              ref={inputRef}
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={data.searchVal}
              onChange={(e) => handleSearchVal(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log(e.key);
                  console.log(data.searchVal);
                  data.handleSearchItem(data.searchVal);
                }
              }}
            />
            <div className="xmark-container" onClick={clearSearchVal}>
              <FontAwesomeIcon
                icon={faXmark}
                className={data.searchVal === "" ? "ellapsed" : "xmark-icon"}
              />
            </div>
            <button
              className="search-button"
              onClick={() => data.handleSearchItem(data.searchVal)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={displayList ? "product-list" : "ellapsed"}>
            {productName.map((product, index) => {
              return (
                <div
                  key={index}
                  className="product-list-searchbar"
                  onClick={() => {
                    data.setSearchVal(product);
                    setTimeout(() => {
                      handleHideList();
                      inputRef.current.focus();
                    }, 0);
                  }}
                >
                  {product}
                </div>
              );
            })}
          </div>
        </div>
        {userName ? (
          <div className="user-container">
            <FontAwesomeIcon icon={faUser} />
            <span>{userName}</span>
          </div>
        ) : (
          <Link to="/user/signin" className="right-elements">
            <button className="login-container">
              <FontAwesomeIcon icon={faUser} />
              <span>Login</span>
            </button>
          </Link>
        )}
        <div className="right-elements" onClick={handleCartPanel}>
          <FontAwesomeIcon icon={faCartShopping} className="cart-button" />
          <span className={data.cartValue == 0 ? "ellapsed" : "cart-value"}>
            {data.cartValue}
          </span>
        </div>
      </div>
    </div>
  );
}
