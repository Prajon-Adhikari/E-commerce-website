import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function SignUp() {
  return (
    <div className="signup-page ">
      <form action="" className="signup-form-container">
        <h4>Sign Up</h4>
        <input type="text" placeholder="First Name" className="inputbar" />
        <input type="text" placeholder="Last Name" className="inputbar" />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="inputbar"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="inputbar"
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="Mobile"
          className="inputbar"
        />
        <input type="submit" value="Sign Up" className="inputbar submit-btn" />
        <p>or</p>
        <button className="inputbar signin-btn">
          <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
          SIGN IN WITH GOOGLE
        </button>
        <button className="inputbar signin-btn">
          <FontAwesomeIcon icon={faApple} className="brand-icon" />
          SIGN IN WITH APPLE
        </button>
      </form>
    </div>
  );
}
