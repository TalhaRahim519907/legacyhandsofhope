import React, { useState } from "react";
import "./EventPage.css";

const EventsPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (name, price, image) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) =>
          i.name === name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { name, price, image, quantity: 1 }];
    });
  };

  const updateQuantity = (index, change) => {
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity += change;
      if (updated[index].quantity <= 0) updated.splice(index, 1);
      return updated;
    });
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const totalAmount = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const completeCheckout = (e) => {
    e.preventDefault();
    alert(
      `🎉 Thank you for your purchase!\n\nOrder Total: $${totalAmount.toLocaleString()}`
    );
    setCart([]);
    setShowCheckout(false);
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Page Title */}
      <div className="page-title">
        <h1>UPCOMING EVENTS</h1>
      </div>

      <div className="main-container">
        {/* Banner */}
        <div className="event-banner">
          <img src="src\assets\ecard-1.jpg" alt="Event Banner" />
        </div>

        {/* Event Card */}
        <div className="event-card">
          <h2>
            Legacy Hands of Hope
            <br />
            Christmas Fundraising Gala
            <br />& Charity Benefit
          </h2>

          <div className="event-meta">
            <div className="meta-item">
              <div className="meta-icon">📅</div>
              <div className="meta-content">
                <h3>3 days left!</h3>
                <p>Dec 21 @ 5:00 AM to Dec 21 @ 11:59 PM</p>
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-icon">📍</div>
              <div className="meta-content">
                <h3>Location</h3>
                <p>
                  405-425 University Ave
                  <br />
                  Newark, NJ 07102, USA
                </p>
              </div>
            </div>
          </div>

          {/* Tickets */}
          <div className="ticket-options">
            <Ticket
              title="VIP Admission Ticket"
              price={150}
              img="src\assets\ecard-2.webp"
              desc="All-inclusive: Dinner and Cocktails included"
              onAdd={addToCart}
            />
            <Ticket
              title="Presenting Sponsor – Northern Lights"
              price={5000}
              features={[
                "Reserved table for 10 guests",
                "Full-page ad in program",
                "Logo on all event materials",
              ]}
              onAdd={addToCart}
            />
            <Ticket
              title="Gold Sponsor – Midnight Magic"
              price={3000}
              features={[
                "Reserved table for 5 guests",
                "Quarter-page ad in program",
              ]}
              onAdd={addToCart}
            />
            <Ticket
              title="Silver Sponsor – Winter Glow"
              price={1000}
              features={[
                "Reserved table for 4 guests",
                "Name listed in program",
              ]}
              onAdd={addToCart}
            />
            <Ticket
              title="Bronze Sponsor – Frost"
              price={500}
              features={["1 gala ticket", "Name under Community Sponsors"]}
              onAdd={addToCart}
            />
          </div>
        </div>

        <div className="mission-banner">
          <img src="images/1766088909061_image.png" alt="Mission Trip" />
        </div>
      </div>

      {/* Floating Cart */}
      <div className="floating-cart" onClick={() => setIsCartOpen(true)}>
        🛒
        <span className="cart-badge">{totalItems}</span>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="cart-modal" onClick={() => setIsCartOpen(false)}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            {!showCheckout ? (
              <>
                <div className="cart-header">
                  <h2>Shopping Cart</h2>
                  <span
                    className="close-cart"
                    onClick={() => setIsCartOpen(false)}
                  >
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
                    cart.map((item, i) => (
                      <div className="cart-item" key={i}>
                        <div>
                          <h3>{item.name}</h3>
                          <div className="cart-item-price">
                            ${item.price.toLocaleString()}
                          </div>
                          <div className="item-quantity">
                            <button
                              className="qty-btn"
                              onClick={() => updateQuantity(i, -1)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="qty-btn"
                              onClick={() => updateQuantity(i, 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <span
                          className="remove-item"
                          onClick={() => removeItem(i)}
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
                      <span>Total:</span>
                      <span>${totalAmount.toLocaleString()}</span>
                    </div>
                    <button
                      className="checkout-btn"
                      onClick={() => setShowCheckout(true)}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="cart-header">
                  <h2>Checkout</h2>
                  <span
                    className="close-cart"
                    onClick={() => setIsCartOpen(false)}
                  >
                    ×
                  </span>
                </div>

                <form className="checkout-form" onSubmit={completeCheckout}>
                  <button
                    type="button"
                    className="back-to-cart"
                    onClick={() => setShowCheckout(false)}
                  >
                    ← Back to Cart
                  </button>

                  <h3>Order Summary</h3>
                  <p>
                    <strong>Total: ${totalAmount.toLocaleString()}</strong>
                  </p>

                  <button className="checkout-btn">Complete Purchase 🎉</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Ticket = ({ title, price, img, desc, features, onAdd }) => (
  <div className="ticket-option">
    {img && <img src={img} alt={title} className="ticket-image" />}
    <div className="ticket-info">
      <h3>{title}</h3>
      <div className="ticket-price">${price.toLocaleString()}</div>
      {desc && <p className="ticket-description">{desc}</p>}
      {features && (
        <ul className="ticket-features">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </div>
    <button
      className="add-to-cart-btn"
      onClick={() => onAdd(title, price, img)}
    >
      Add +
    </button>
  </div>
);

export default EventsPage;
