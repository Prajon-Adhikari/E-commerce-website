import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <h2>ELECTRONICS</h2>
      </div>
      <div className="shop-container">
        <h5>Shop</h5>
        <p> True Wireless Earbuds</p>
        <p> Wired Headphones</p>
        <p> Home Audio</p>
        <p> Smart Watches</p>
        <p> Speaker </p>
      </div>
      <div className="help-container">
        <h5>Help</h5>
        <p> Track Your Order</p>
        <p> Warranty</p>
        <p> Return Policy</p>
        <p> Service Center</p>
        <p> Bulk Order </p>
      </div>
      <div className="company-container">
        <h5>Company</h5>
        <p> About Boat</p>
        <p> News</p>
        <p> Read Our Blog</p>
        <p> Carrer</p>
        <p> Security </p>
      </div>
      <div className="contacts">
        <div className="social-media">
          <FontAwesomeIcon icon={faFacebook} className="media facebook-icon" />
          <FontAwesomeIcon icon={faInstagram} className="media insta-icon" />
          <FontAwesomeIcon icon={faXTwitter} className="media x-icon" />
          <FontAwesomeIcon icon={faWhatsapp} className="media whatsapp-icon" />
        </div>
        <div className="contact-numbers">
          <p>9876543210</p>
          <p>056-400056</p>
        </div>
      </div>
    </div>
  );
}
