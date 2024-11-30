import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function PayDetails({
  onClose,
  fullName,
  address,
  mobile,
  cardType,
  cardNumber,
  amount,
}) {
  return (
    <div className="payment-pay-section">
      <div className="payment-form">
        <div className="payment-nav">
          <h4>ELECTRONICS</h4>
          <FontAwesomeIcon
            icon={faClose}
            className="payment-close-icon"
            onClick={onClose}
          />
        </div>
        <div className="payment-details">
          <h2>Your Details</h2>
          <p>
            <span>Full Name :</span>
            <span>{fullName}</span>
          </p>
          <p>
            <span>Address :</span>
            <span> {address}</span>
          </p>
          <p>
            <span>Mobile :</span>
            <span> {mobile} </span>
          </p>
          <p>
            <span>Tracking Id :</span>
            <span></span>
          </p>
          <p>
            <span>Card Type :</span>
            <span>{cardType}</span>
          </p>
          <p>
            <span>Card Number :</span>
            <span>{cardNumber}</span>
          </p>
          <p>
            <span>Total Amount :</span>
            <span> {amount}</span>
          </p>
        </div>
        <div className="policy-info">
          By proceeding, I accept that I have read and understood the
          Electronics's <a href="">Privacy Poicy</a> and <a href="">T&C</a>
        </div>
        <div className="payment-last-part">
          <div>T&C | Policy</div>
          <div>&copy; Copyright </div>
          <div>Powered By Infinix GT Pro</div>
        </div>
      </div>
    </div>
  );
}
