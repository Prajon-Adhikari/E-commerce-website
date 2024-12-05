import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userMobile, setUserMobile] = useState("");

  const handleUserSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/user/signup",
        { userFirstName, userLastName, userEmail, userPassword, userMobile },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="signup-page ">
      <form action="/user/signup" className="signup-form-container">
        <h4>Sign Up</h4>
        <input
          type="text"
          placeholder="First Name"
          name="userFirstName"
          className="inputbar"
          value={userFirstName}
          onChange={(e) => setUserFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="userLastName"
          className="inputbar"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
        />
        <input
          type="email"
          name="userEmail"
          id=""
          placeholder="Email"
          className="inputbar"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          name="userPassword"
          id=""
          placeholder="Password"
          className="inputbar"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <input
          type="text"
          name="userMobile"
          id=""
          placeholder="Mobile"
          className="inputbar"
          value={userMobile}
          onChange={(e) => setUserMobile(e.target.value)}
        />
        <button className="inputbar submit-btn" onClick={handleUserSignUp}>
          Sign Up
        </button>
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
