import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <h4>ELECTRONICS</h4>
      <div className="nav-elements">
        <Link to="/">Home </Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/category">CATEGORY</Link>
        <Link to="/blogs">BLOGS</Link>
      </div>
      <div className="right-nav-elements right-elements">
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search..." />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className=" right-elements">
          <button className="login-container">
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </button>
        </div>
        <div className=" right-elements">
          <Link to="/cart">
            <button className="cart">
              {" "}
              <FontAwesomeIcon icon={faCartShopping} />
              <span
                className={props.cartValue == 0 ? "ellapsed" : "cart-value"}
              >
                {props.cartValue}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
