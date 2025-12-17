import React, { useState } from "react";

const CheckoutForm = ({ total, back }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    payment: "credit",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentSelect = (method) => {
    setFormData({ ...formData, payment: method });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert("Order submitted!");
  };

  return (
    <div className="checkout-form active">
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="form-section">
          <h3>Contact Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="form-section">
          <h3>Shipping Address</h3>
          <div className="form-group">
            <label>Street Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>State/Province *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>ZIP/Postal Code *</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Payment Method */}
        <div className="form-section">
          <h3>Payment Method</h3>
          <div className="payment-methods">
            {["credit", "debit", "paypal", "venmo"].map((method) => (
              <label
                key={method}
                className={`payment-method ${
                  formData.payment === method ? "selected" : ""
                }`}
                onClick={() => handlePaymentSelect(method)}
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={formData.payment === method}
                  readOnly
                />
                <div className="payment-method-icon">
                  {method === "credit" || method === "debit"
                    ? "💳"
                    : method === "paypal"
                    ? "🅿️"
                    : "📱"}
                </div>
                <div>{method.charAt(0).toUpperCase() + method.slice(1)}</div>
              </label>
            ))}
          </div>

          {(formData.payment === "credit" || formData.payment === "debit") && (
            <div id="cardDetails">
              <div className="form-group">
                <label>Card Number *</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date *</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV *</label>
                  <input
                    type="text"
                    name="cardCVV"
                    value={formData.cardCVV}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength={4}
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="form-section">
          <h3>Order Summary</h3>
          <div className="cart-total" style={{ marginTop: "1.5rem" }}>
            <span>Total Amount:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button type="submit" className="submit-order-btn">
          Complete Order
        </button>
        <div className="back-to-cart" onClick={back}>
          ← Back to Cart
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
