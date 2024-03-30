import React, { useState } from 'react';
import img from "../images/payment.jpg"

const Payment = () => {

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // code for submitting payment
  };

  return (
    <div className="container mt-3 mb-4">
        <div className="row">
        <h1 className="text-center m12-4">Payment Information</h1>
        </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <img
              src={img}
              alt="Payment Logo"
              className="img-fluid mx-auto d-block mb-4"
            />
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="cardName">Name on Card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardName"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={handleCardNameChange}
                  required
                />
              </div>
              <div className="form-row mt-2">
                <div className="col">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    required
                  />
                </div>
                <div className="col mt-2">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={handleCvvChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
