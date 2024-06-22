import React from 'react';
import './Order.css';

const Order = () => {
  return (
    <div className="order-container">
      <h1>Order</h1>
      <form className="order-form">
        <div className="order-form-group">
          <label className="order-form-label">Full Name</label>
          <input type="text" className="order-form-input" />
        </div>
        <div className="order-form-group">
          <label className="order-form-label">Address</label>
          <input type="text" className="order-form-input" />
        </div>
        <div className="order-form-group">
          <label className="order-form-label">Payment Method</label>
          <select className="order-form-input">
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>
        </div>
        <div className="order-form-group">
          {/* reCAPTCHA */}
          <div className="order-recaptcha">
            {/* Your reCAPTCHA component here */}
            <p>reCAPTCHA component</p>
          </div>
        </div>
        <button type="submit" className="btn btn-primary order-form-button">Place Order</button>
      </form>
    </div>
  );
};

export default Order;