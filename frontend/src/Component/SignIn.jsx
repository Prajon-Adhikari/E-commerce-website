import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signin-page">
      <form action="" className="signin-form-container">
        <h4 className="signin">Sign In</h4>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          className="inputbar"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          className="inputbar"
        />
        <input type="submit" value="Sign In" className="inputbar submit-btn" />
        <button className="inputbar signin-btn">
          <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
          SIGN IN WITH GOOGLE
        </button>
        <button className="inputbar signin-btn">
          <FontAwesomeIcon icon={faApple} className="brand-icon" />
          SIGN IN WITH APPLE
        </button>

        <p className="registerlink">
          Don't have an account ? <Link to="/user/signup"> Register Now</Link>
        </p>
      </form>
    </div>
  );
}
