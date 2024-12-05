import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import toast from "react-hot-toast";
import PayDetails from "./PayDetails";

export default function PaymentPaySection({
  onClose,
  totalAmount,
  fullName,
  address,
  mobile,
}) {
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState(totalAmount);
  const [showPayDetails, setShowPayDetails] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      console.log(cardType, fullName);
      const { data } = await axios.post(
        "http://localhost:3000/payment",
        { fullName, address, mobile, cardType, cardNumber, amount },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setShowPayDetails(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {!showPayDetails ? (
        <form action="/payment">
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
                  <div>Rs. {totalAmount}</div>
                </div>
                <div className="gst">With Added GST</div>
              </div>
              <div className="payment-personal-info">
                <h4>Choose Your Payment Method</h4>
                <div className="card-type">
                  <input
                    type="radio"
                    name="cardType"
                    value="esewa"
                    id="esewa"
                    checked={cardType === "esewa"}
                    onChange={(e) => setCardType(e.target.value)}
                  />{" "}
                  <label htmlFor="esewa" className="cardtype">
                    Esewa
                  </label>
                  <input
                    type="radio"
                    name="cardType"
                    value="khalti"
                    id="khalti"
                    checked={cardType === "khalti"}
                    onChange={(e) => setCardType(e.target.value)}
                  />{" "}
                  <label htmlFor="khalti" className="cardtype">
                    Khalti
                  </label>
                  <input
                    type="radio"
                    name="cardType"
                    value="paypal"
                    id="paypal"
                    checked={cardType === "paypal"}
                    onChange={(e) => setCardType(e.target.value)}
                  />{" "}
                  <label htmlFor="paypal" className="cardtype">
                    Paypal
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Card Number"
                  name="cardNumber"
                  className="input"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Amount"
                  name="amount"
                  className="input"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  disabled
                />
              </div>

              <div className="payment-continue-btn">
                {cardType === "" || cardNumber === "" || amount === "" ? (
                  <button disabled className="disabled-btn">
                    Pay &nbsp;{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="right-arrow"
                    />
                  </button>
                ) : (
                  <button onClick={handlePayment} className="continue-btn">
                    Pay &nbsp;{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="right-arrow"
                    />
                  </button>
                )}
              </div>
              <div className="policy-info">
                By proceeding, I accept that I have read and understood the
                Electronics's <a href="">Privacy Poicy</a> and{" "}
                <a href="">T&C</a>
              </div>
              <div className="payment-last-part">
                <div>T&C | Policy</div>
                <div>&copy; Copyright </div>
                <div>Powered By Infinix GT Pro</div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <PayDetails
          onClose={onClose}
          fullName={fullName}
          address={address}
          mobile={mobile}
          cardType={cardType}
          cardNumber={cardNumber}
          amount={amount}
        />
      )}
    </>
  );
}
