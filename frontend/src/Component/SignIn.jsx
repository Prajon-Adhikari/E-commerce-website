import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/signin", {
        userEmail,
        userPassword,
      });
      if (response.status === 200 && response.data.userName) {
        const userName = response.data.userName; // Adjust according to your API response structure
        console.log("Sign in successful", response.data);
        navigate("/", { state: { userName } });
      }
    } catch (error) {
      console.log("Sign In unsuccessfull", error.response);
    }
  };
  return (
    <div className="signin-page">
      <form
        action="/user/signin"
        onSubmit={handleSignIn}
        className="signin-form-container"
      >
        <h4 className="signin">Sign In</h4>
        <input
          type="email"
          name="userEmail"
          id=""
          placeholder="Email"
          className="inputbar"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          name="userPassword"
          id=""
          placeholder="Password"
          className="inputbar"
          onChange={(e) => setUserPassword(e.target.value)}
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
