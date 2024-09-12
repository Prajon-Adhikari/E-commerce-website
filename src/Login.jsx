import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-page">
      <form action="" className="form-container">
        <div className="login-form">
          <h4>Login</h4>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="inputbar"
          />
          <input type="password" placeholder="Password" className="inputbar" />
          <input type="submit" value="Log In" className="inputbar submit-btn" />
          <Link to="/signup" className="signup">
            Sign Up
          </Link>
          <p>or</p>
          <button className="inputbar signin-btn">SIGN IN WITH GOOGLE</button>
          <button className="inputbar signin-btn">SIGN IN WITH APPLE</button>
        </div>
      </form>
    </div>
  );
}
