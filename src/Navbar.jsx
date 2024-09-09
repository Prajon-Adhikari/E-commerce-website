import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { counterCartVAlue } from "./Context";
import { ProductData } from "./ProductData";

export default function Navbar() {
  const productList = ProductData.map((products) => products.productName);
  const value = useContext(counterCartVAlue);
  const [productName, setProductName] = useState(productList);
  const [searchVal, setSearchVal] = useState("");
  const [displayList, setDisplayList] = useState(false);

  function handleSearchVal(event) {
    setSearchVal(event.target.value);
    setDisplayList(true);
    if (searchVal === "") {
      setProductName(productList);
      return;
    }
    const filterBySearch = productList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setProductName(filterBySearch);
  }

  function handleHideList() {
    setDisplayList(false);
  }

  return (
    <div className="navbar-container">
      <h4>ELECTRONICS</h4>
      <div className="nav-elements">
        <Link to="/">HOME</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/category">CATEGORY</Link>
        <Link to="/blogs">BLOGS</Link>
      </div>
      <div className="right-nav-elements right-elements">
        <div className="searchbar-container">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={searchVal}
              onChange={(e) => handleSearchVal(e)}
            />
            <button className="search-button">
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
                    setSearchVal(product);
                    setTimeout(() => {
                      handleHideList();
                    }, 0);
                  }}
                >
                  {product}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" right-elements">
          <button className="login-container">
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </button>
        </div>
        <Link to="/cart" className=" right-elements ">
          <FontAwesomeIcon icon={faCartShopping} className="cart-button" />
          <span className={value.cartValue == 0 ? "ellapsed" : "cart-value"}>
            {value.cartValue}
          </span>
        </Link>
      </div>
    </div>
  );
}
