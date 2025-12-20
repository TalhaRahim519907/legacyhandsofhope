// src/components/CartModal.jsx
import React, { useState } from "react";
import "../pages/EventPage.css"; // reuse your CSS

const CartModal = ({
  isOpen,
  closeCart,
  cart,
  updateQuantity,
  removeItem,
  showCheckout,
}) => {
  const [checkoutView, setCheckoutView] = useState(false);

  const handleCheckout = () => {
    setCheckoutView(true);
  };

  const backToCart = () => {
    setCheckoutView(false);
  };

  const completeCheckout = (e) => {
    e.preventDefault();
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    alert(
      `🎉 Thank you for your purchase!\n\nOrder Total: $${total.toLocaleString()}\n\nYou will receive a confirmation email shortly.\n\nYour support helps us bring hope to communities in Guyana and Liberia!`
    );
    // Reset cart and close
    cart.forEach((_, i) => removeItem(i)); // clear all
    setCheckoutView(false);
    closeCart();
  };

  if (!isOpen) return null;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="cart-modal active"
      onClick={(e) => e.target === e.currentTarget && closeCart()}
    >
      <div className="cart-content">
        {!checkoutView ? (
          <div id="cartView">
            <div className="cart-header">
              <h2>Shopping Cart</h2>
              <span className="close-cart" onClick={closeCart}>
                ×
              </span>
            </div>

            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <p>🛒</p>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <div className="cart-item-price">
                        ${item.price.toLocaleString()}
                      </div>
                      <div className="item-quantity">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(index, -1)}
                        >
                          -
                        </button>
                        <span className="qty-display">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(index, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span
                      className="remove-item"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </span>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-total">
                <div className="total-row">
                  <span className="total-label">Total:</span>
                  <span className="total-amount">
                    ${totalAmount.toLocaleString()}
                  </span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div id="checkoutView">
            <div className="cart-header">
              <h2>Checkout</h2>
              <span className="close-cart" onClick={closeCart}>
                ×
              </span>
            </div>

            <div className="checkout-form active">
              <button className="back-to-cart" onClick={backToCart}>
                ← Back to Cart
              </button>

              <form onSubmit={completeCheckout}>
                {/* Personal Information */}
                <div className="form-section">
                  <h3>Personal Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" required />
                    </div>
                    <div className="form-group">
                      <label>Phone *</label>
                      <input type="tel" required />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="form-section">
                  <h3>Billing Address</h3>
                  <div className="form-group">
                    <label>Address *</label>
                    <input type="text" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>State *</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>ZIP Code *</label>
                      <input type="text" required />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="form-section">
                  <h3>Payment Method</h3>
                  <div className="form-group">
                    <label>Card Number *</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date *</label>
                      <input type="text" placeholder="MM/YY" required />
                    </div>
                    <div className="form-group">
                      <label>CVV *</label>
                      <input type="text" placeholder="123" required />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="form-section">
                  <h3>Order Summary</h3>
                  <div>
                    {cart.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "1rem",
                          background: "var(--soft-gray)",
                          borderRadius: "8px",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span>
                          {item.name} (x{item.quantity})
                        </span>
                        <strong>
                          ${(item.price * item.quantity).toLocaleString()}
                        </strong>
                      </div>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1.5rem",
                        background: "var(--primary-blue)",
                        color: "white",
                        borderRadius: "8px",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        marginTop: "1rem",
                      }}
                    >
                      <span>Total:</span>
                      <span>${totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="checkout-btn">
                  Complete Purchase 🎉
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
