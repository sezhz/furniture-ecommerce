import React, { useState } from "react";
import "./Ordering.css";

const Ordering = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
  const [isNameComplete, setIsNameComplete] = useState(false);
  const [isExpirationDateComplete, setIsExpirationDateComplete] =
    useState(false);
  const [isCvvComplete, setIsCvvComplete] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleCardNumberChange = (e) => {
    const inputText = e.target.value.replace(/\D/g, "");
    const formattedInput = inputText.match(/\d{1,4}/g);

    if (formattedInput !== null) {
      setCardNumber(formattedInput.join(" ").substr(0, 19));
      setIsCardNumberComplete(formattedInput.join("").length === 16);
    } else {
      setCardNumber("");
      setIsCardNumberComplete(false);
    }
  };

  const handleNameChange = (e) => {
    const inputText = e.target.value.replace(/[^A-Za-zА-Яа-я]/g, "");
    const formattedName =
      inputText.charAt(0).toUpperCase() + inputText.slice(1);
    setName(formattedName);
    setIsNameComplete(inputText.length > 0);
  };

  const handleExpirationDateChange = (e) => {
    const inputText = e.target.value.replace(/\D/g, "");

    let formattedInput = inputText;
    if (inputText.length > 2) {
      formattedInput = inputText.substr(0, 2) + " / " + inputText.substr(2, 2);
    }

    const month = parseInt(formattedInput.substr(0, 2), 10);
    if (month > 12) {
      formattedInput = "12" + formattedInput.substr(2);
    }

    setExpirationDate(formattedInput);
    setIsExpirationDateComplete(formattedInput.length === 7);
  };

  const handleCvvChange = (e) => {
    const inputText = e.target.value.replace(/\D/g, "");
    setCvv(inputText);
    setIsCvvComplete(inputText.length === 3);
  };

  const handlePayClick = () => {
    if (
      isCardNumberComplete &&
      isNameComplete &&
      isExpirationDateComplete &&
      isCvvComplete
    ) {
      setCardNumber("");
      setName("");
      setExpirationDate("");
      setCvv("");
      setIsCardNumberComplete(false);
      setIsNameComplete(false);
      setIsExpirationDateComplete(false);
      setIsCvvComplete(false);
      setIsOrderPlaced(true);
    }
  };

  return (
    <div id="ordering" className="ordering">
      <div className="container">
        <div className="order-header">
          <h1>ordering</h1>
          <div className="order-cont">
            <h2>card number</h2>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength="19"
              style={{
                backgroundColor: isCardNumberComplete
                  ? "rgba(150, 255, 150, 0.7)"
                  : "white",
              }}
            ></input>
            <h2>name</h2>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{
                backgroundColor: isNameComplete
                  ? "rgba(150, 255, 150, 0.7)"
                  : "white",
              }}
            ></input>
            <h2>card expiration date</h2>
            <input
              type="text"
              value={expirationDate}
              onChange={handleExpirationDateChange}
              maxLength="7"
              style={{
                backgroundColor: isExpirationDateComplete
                  ? "rgba(150, 255, 150, 0.7)"
                  : "white",
              }}
            ></input>
            <h2>CVV code</h2>
            <input
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              maxLength="3"
              style={{
                backgroundColor: isCvvComplete
                  ? "rgba(150, 255, 150, 0.7)"
                  : "white",
              }}
            ></input>
            {isOrderPlaced ? (
              <p>Thank you for your order!</p>
            ) : (
              <button onClick={handlePayClick}>pay</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
