import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PaymentPaySection({ onClose, totalAmount }) {
  return (
    <div className="payment-pay-section">
      <div className="payment-form">
        <div className="payment-nav">
          <h4>ELECTRONICS</h4>
          <a href="">Personal</a>
          <a href=""> Pay</a>
          <FontAwesomeIcon
            icon={faClose}
            className="payment-close-icon"
            onClick={onClose}
          />
        </div>
        <div className="payment-order-details">
          <div className="order-summary">
            <div>Order Summary</div>
            <div>{totalAmount}</div>
          </div>
          <div className="gst">With Added GST</div>
        </div>
        <div className="payment-personal-info">
          <h4>Choose Your Payment Method</h4>
          <div className="card-type">
            <input type="radio" name="cardType" value="esewa" id="esewa" />{" "}
            <label htmlFor="esewa" className="cardtype">
              Esewa
            </label>
            <input type="radio" name="cardType" value="khalti" id="khalti" />{" "}
            <label htmlFor="khalti" className="cardtype">
              Khalti
            </label>
            <input type="radio" name="cardType" value="paypal" id="paypal" />{" "}
            <label htmlFor="paypal" className="cardtype">
              Paypal
            </label>
          </div>
          <input
            type="text"
            placeholder="Card Number"
            name="cardNumber"
            className="input"
          />
          <input
            type="text"
            placeholder="Amount"
            name="paymentAmount"
            className="input"
            value={totalAmount}
            disabled
          />
        </div>
        <div className="payment-continue-btn">
          <button>
            Pay &nbsp;{" "}
            <FontAwesomeIcon icon={faArrowRight} className="right-arrow" />
          </button>
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
