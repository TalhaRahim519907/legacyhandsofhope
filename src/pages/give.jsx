import React, { useState } from "react";
import "./give.css";
import giveImg from "../assets/give_page-img.png";
import studentImg from "../assets/student-give-page.png";

const Give = () => {
  const [amount, setAmount] = useState(300);
  const [frequency, setFrequency] = useState("one-time");
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const amountDescriptions = {
    50: "Provides essential supplies for one student for a month.",
    100: "Funds a week of nutritious meals for a classroom.",
    300: "Helps fund a community workshop that empowers women with skills for sustainable income.",
    500: "Supports emergency assistance for a family in need."
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipCode: e.target.zipCode.value,
      country: e.target.country.value,
      paymentMethod: paymentMethod,
      amount,
      frequency
    };

    console.log("Donation submitted:", formData);

    alert(`Thank you for your ${frequency} donation of $${amount}, ${formData.firstName}! 🎉
You will receive a confirmation email at ${formData.email}.
100% of your donation goes directly to supporting our mission!`);

    e.target.reset();
    setShowCheckout(false);
  };

  const formatCardNumber = (e) => {
    let value = e.target.value.replace(/\s/g, "");
    let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
    e.target.value = formattedValue;
  };

  const formatExpiry = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) value = value.slice(0, 2) + "/" + value.slice(2, 4);
    e.target.value = value;
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Support the Mission</h1>

      {/* Donation Section */}
      {!showCheckout && (
        <div className="donation-section">
          <div className="donation-image">
            <img src={studentImg} alt="Children learning" />
          </div>

          <div className="donation-form-container">
            <h2 className="form-title">Choose an amount:</h2>

            {/* Frequency Tabs */}
            <div className="amount-tabs">
              <div
                className={`amount-tab ${frequency === "one-time" ? "active" : ""}`}
                onClick={() => setFrequency("one-time")}
              >
                One-time
              </div>
              <div
                className={`amount-tab ${frequency === "monthly" ? "active" : ""}`}
                onClick={() => setFrequency("monthly")}
              >
                ❤️ Monthly
              </div>
            </div>

            {/* Amount Options */}
            <div className="amount-grid">
              {[50, 100, 300, 500].map((val) => (
                <div
                  key={val}
                  className={`amount-option ${amount === val ? "active" : ""}`}
                  onClick={() => setAmount(val)}
                >
                  ${val}
                </div>
              ))}
            </div>

            {/* Selected Amount */}
            <div className="selected-amount">
              <div className="amount-display">$ <span>{amount}</span></div>
              <p className="amount-description">{amountDescriptions[amount]}</p>
            </div>

            {/* Info Boxes */}
            <div className="info-box">
              <div className="info-icon">📄</div>
              <div className="info-text">
                You'll receive a tax receipt for <strong>${amount}</strong>.
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">💡</div>
              <div className="info-text">
                <strong>Did you know?</strong> We fundraise with Zeffy to ensure 100% of your donation goes to our mission!
              </div>
            </div>

            <button className="continue-btn" onClick={() => setShowCheckout(true)}>
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Checkout Section */}
      {showCheckout && (
        <div className="checkout-section active">
          <h2 className="form-title">Complete Your Donation</h2>

          <form onSubmit={handleSubmit}>
            {/* Personal Info */}
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" required />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required />
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="form-section">
              <h3>Billing Address</h3>
              <div className="form-group">
                <label>Street Address *</label>
                <input type="text" name="address" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" name="city" required />
                </div>
                <div className="form-group">
                  <label>State/Province *</label>
                  <input type="text" name="state" required />
                </div>
                <div className="form-group">
                  <label>ZIP/Postal Code *</label>
                  <input type="text" name="zipCode" required />
                </div>
              </div>
              <div className="form-group">
                <label>Country *</label>
                <select name="country" required>
                  <option value="">Select Country</option>
                  <option value="US" selected>United States</option>
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
                    className={`payment-method ${paymentMethod === method ? "selected" : ""}`}
                    onClick={() => setPaymentMethod(method)}
                  >
                    <input type="radio" name="payment" />
                    <div className="payment-method-icon">
                      {method === "paypal" ? "🅿️" : method === "venmo" ? "📱" : "💳"}
                    </div>
                    <div>{method.toUpperCase()}</div>
                  </label>
                ))}
              </div>

              {/* Card Details */}
              {(paymentMethod === "credit" || paymentMethod === "debit") && (
                <div id="cardDetails">
                  <div className="form-group">
                    <label>Card Number *</label>
                    <input type="text" maxLength="19" placeholder="1234 5678 9012 3456" onChange={formatCardNumber} required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date *</label>
                      <input type="text" maxLength="5" placeholder="MM/YY" onChange={formatExpiry} required />
                    </div>
                    <div className="form-group">
                      <label>CVV *</label>
                      <input type="text" maxLength="4" placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Donation Summary */}
            <div className="form-section">
              <h3>Donation Summary</h3>
              <div className="selected-amount">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>Donation Amount</span>
                  <span className="amount-display" style={{ fontSize: "2rem" }}>${amount}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "1rem", borderTop: "2px solid #e5e7eb" }}>
                  <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>Frequency</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>{frequency === "monthly" ? "Monthly" : "One-time"}</span>
                </div>
              </div>
            </div>

            <button type="submit" className="continue-btn">Complete Donation 🎉</button>
            <div className="back-to-amounts" onClick={() => setShowCheckout(false)}>← Back to amounts</div>
          </form>
        </div>
      )}

      {/* Volunteer Section */}
      <div className="volunteer-section">
        <img src={giveImg} alt="Christmas Fundraising Gala - Volunteers Needed" />
      </div>
    </div>
  );
};

export default Give;
