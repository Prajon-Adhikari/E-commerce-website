import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
  const [clicked, setClicked] = useState("home");

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

  function handleClick(value) {
    setClicked(value);
  }

  return (
    <div className="navbar-container">
      <h4>ELECTRONICS</h4>
      <div className="nav-elements">
        <Link
          to="/"
          onClick={() => handleClick("home")}
          className={clicked === "home" ? "active-link" : ""}
        >
          HOME
        </Link>
        <Link
          to="/services"
          onClick={() => handleClick("services")}
          className={clicked === "services" ? "active-link" : ""}
        >
          SERVICES
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
            <option value="watch">WATCH</option>
            <option value="laptop">LAPTOP</option>
            <option value="speaker">SPEAKER</option>
          </select>
        </Link>
        <Link
          to="/blogs"
          onClick={() => handleClick("blog")}
          className={clicked === "blog" ? "active-link" : ""}
        >
          BLOGS
        </Link>
      </div>
      <div className="right-nav-elements right-elements">
        <div className="searchbar-container">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={data.searchVal}
              onChange={(e) => handleSearchVal(e)}
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
          <span className={data.cartValue == 0 ? "ellapsed" : "cart-value"}>
            {data.cartValue}
          </span>
        </Link>
      </div>
    </div>
  );
}
