// src/pages/EventsPage.jsx
import React, { useState } from "react";
import CartModal from "../components/EventCart";
import "../pages/EventPage.css"; // Your existing CSS
import eventtimg from "../assets/Event image.jpg";
import eventtsimg from "../assets/event-image-2.jpg";
import card6img from "../assets/ecard-6.webp";
import card5img from "../assets/ecard-5.webp";
import card4img from "../assets/ecard-4.webp";
import card3img from "../assets/ecard-3.webp";
import card2img from "../assets/ecard-2.webp";
import card1img from "../assets/ecard-1.jpg";



const EventsPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Add ticket to cart
  const addToCart = (name, price, image) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name, price, image, quantity: 1 }];
    });
  };

  // Update quantity
  const updateQuantity = (index, change) => {
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity += change;
      if (updated[index].quantity <= 0) updated.splice(index, 1);
      return updated;
    });
  };

  // Remove item
  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Open/close cart
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  // Checkout (placeholder)
  const showCheckout = () => alert("Checkout functionality goes here.");

  return (
    <div>
      {/* Page Title */}
      <div className="page-title">
        <h1>UPCOMING EVENTS</h1>
      </div>

      {/* Main Container */}
      <div className="main-container">
        {/* Event Banner */}
        <div className="event-banner">
          <img
            src={eventtimg}
            alt="Christmas Fundraising Gala Banner"
          />
        </div>

        {/* Event Details Card */}
        <div className="event-card">
          <h2>
            Legacy Hands of Hope
            <br />
            Christmas Fundraising Gala
            <br />& Charity Benefit
          </h2>

          {/* Event Meta */}
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

          {/* Ticket Options */}
          <div className="ticket-options">
            {/* VIP Admission */}
            <div className="ticket-option">
              <img
                src={card1img}
                alt="VIP Ticket"
                className="ticket-image"
              />
              <div className="ticket-info">
                <h3>Vip Admission ticket</h3>
                <div className="ticket-price">$150</div>
                <p className="ticket-description">
                  All-inclusive: Dinner and Cocktails included
                </p>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  addToCart(
                    "VIP Admission ticket",
                    150,
                    card1img
                  )
                }
              >
                Add +
              </button>
            </div>

            {/* Presenting Sponsor */}
            <div className="ticket-option">
              <img
                src={card2img}
                alt="Presenting Sponsor"
                className="ticket-image"
              />
              <div className="ticket-info">
                <h3>Presenting Sponsor – “Diamond Star”</h3>
                <div className="ticket-price">$10,000</div>
                <ul className="ticket-features">
                  <li>One premier VIP table for 10 guests with champagne service.</li>
                  <li> Presenting sponsor recognition on all event materials.</li>
                  <li> Logo featured prominently on invitations, signage, website, & step & repeat.</li>
                  <li> Full-page ad in program (prime placement).</li>
                  <li> 2-minute welcome  remarks during the event.</li>
                  <li> Spotlight feature on social media & the organization’s website.</li>
                  <li> Custom luxury gift set for the table guests.Priority entry, reserved seating, and access to VIP perks.</li>
                </ul>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  addToCart(
                    "Presenting Sponsor - Northern Lights",
                    5000,
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23C0C0C0' stroke='%23999' stroke-width='3'/%3E%3Ctext x='100' y='95' text-anchor='middle' font-size='28' font-weight='bold' fill='white'%3EPRESENTING%3C/text%3E%3Ctext x='100' y='120' text-anchor='middle' font-size='28' font-weight='bold' fill='white'%3ESPONSOR%3C/text%3E%3C/svg%3E"
                  )
                }
              >
                Add +
              </button>
            </div>

 {/* platinum Sponsor */}
            <div className="ticket-option">
              <img
                src={card3img}
                alt="Gold Sponsor"
                className="ticket-image"
              />
              <div className="ticket-info">
                <h3>Platinum Sponsor – “Crystal Elegance”</h3>  
                <div className="ticket-price">$5,000</div>
                <ul className="ticket-features">
                  <li>QVIP table for 8 guests.</li>
                  <li>Logo on event marketing & step & repeat.</li>
                  <li>Half-page ad in program.</li>
                  <li>Recognition by the emcee.</li>
                  <li>Social media & slideshow spotlight.</li>
                  <li>Custom sponsor gift bag for the table guests.</li>
                </ul>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  addToCart(
                    "Gold Sponsor - Midnight Magic",
                    3000,
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23FFD700' stroke='%23DAA520' stroke-width='3'/%3E%3Ctext x='100' y='110' text-anchor='middle' font-size='45' font-weight='bold' fill='white'%3EGOLD%3C/text%3E%3Ctext x='100' y='135' text-anchor='middle' font-size='25' font-weight='bold' fill='white'%3ESPONSOR%3C/text%3E%3C/svg%3E"
                  )
                }
              >
                Add +
              </button>
            </div>



            {/* Gold Sponsor */}
            <div className="ticket-option">
              <img
                src={card4img}
                alt="Gold Sponsor"
                className="ticket-image"
              />
              <div className="ticket-info">
                <h3>Gold Sponsor – “Midnight Magic”</h3>
                <div className="ticket-price">$3,000</div>
                <ul className="ticket-features">
                  <p>Reserved a table for 5 guests.</p>
                  <li>Quarter-page ad in program.</li>
                  <li>Logo on signage & website.</li>
                  <li> Recognition in press release & slideshow.</li>
                  <li>Special sponsor gift bag for guests.</li>
                </ul>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  addToCart(
                    "Gold Sponsor - Midnight Magic",
                    3000,
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23FFD700' stroke='%23DAA520' stroke-width='3'/%3E%3Ctext x='100' y='110' text-anchor='middle' font-size='45' font-weight='bold' fill='white'%3EGOLD%3C/text%3E%3Ctext x='100' y='135' text-anchor='middle' font-size='25' font-weight='bold' fill='white'%3ESPONSOR%3C/text%3E%3C/svg%3E"
                  )
                }
              >
                Add +
              </button>
            </div>

            {/* Silver Sponsor */}
            <div className="ticket-option">
              <img
                src={card5img}
                alt="Silver Sponsor"
                className="ticket-image"
              />
              <div className="ticket-info">
                <h3>Silver Sponsor – “Winter Glow”</h3>
                <div className="ticket-price">$1,000</div>
                <ul className="ticket-features">
                  <li>2 gala tickets.</li>
                  <li>Name listed in the program under Community Sponsors.</li>
                  <li>Gift bag for guests</li>
                  <li>Social media spotlight.</li>
                </ul>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  addToCart(
                    "Silver Sponsor - Winter Glow",
                    1000,
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23C0C0C0' stroke='%23A8A8A8' stroke-width='3'/%3E%3Ctext x='100' y='110' text-anchor='middle' font-size='40' font-weight='bold' fill='white'%3ESILVER%3C/text%3E%3Ctext x='100' y='135' text-anchor='middle' font-size='25' font-weight='bold' fill='white'%3ESPONSOR%3C/text%3E%3C/svg%3E"
                  )
                }
              >
                Add +
              </button>
            </div>

            {/* Bronze Sponsor */}
            <div className="ticket-option">
              <img
                src={card6img}
                alt="Bronze Sponsor"
                className="ticket-image"
              />
              <div className="ticket-info">
                <h3>Bronze Sponsor – “Frost”</h3>
                <div className="ticket-price">$500</div>
                <ul className="ticket-features">
                  <li>1 gala ticket</li>
                  <li>Name listed under Community Sponsors</li>
                  <li>Social media spotlight.</li>
                  <li>Gift bag for the guest.</li>
                </ul>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  addToCart(
                    "Bronze Sponsor - Frost",
                    500,
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23CD7F32' stroke='%23A0522D' stroke-width='3'/%3E%3Ctext x='100' y='110' text-anchor='middle' font-size='38' font-weight='bold' fill='white'%3EBRONZE%3C/text%3E%3Ctext x='100' y='135' text-anchor='middle' font-size='25' font-weight='bold' fill='white'%3ESPONSOR%3C/text%3E%3C/svg%3E"
                  )
                }
              >
                Add +
              </button>
            </div>
          </div>
        </div>

        {/* Mission Trip Banner */}
        <div className="mission-banner">
          <img
            src={eventtsimg}
            alt="Guyana 2026 Missionary Trip"
          />
        </div>
      </div>

      {/* Floating Cart Button */}
      <div className="floating-cart" onClick={openCart}>
        🛒
        <span className="cart-badge">
          {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </div>

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        closeCart={closeCart}
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        showCheckout={showCheckout}
      />
    </div>
  );
};

export default EventsPage;
