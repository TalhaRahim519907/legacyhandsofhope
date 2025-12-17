import React from "react";
import CheckoutForm from "./CheckoutForm";
import "./Cart.css";

const CartModal = ({
  isOpen,
  closeCart,
  cart,
  updateQty,
  removeItem,
  showCheckout,
  setShowCheckout,
}) => {
  if (!isOpen) return null;

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className="cart-modal active" onClick={closeCart}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>{showCheckout ? "Checkout" : "Shopping Cart"}</h2>
          <button className="close-cart" onClick={closeCart}>
            ×
          </button>
        </div>

        {!showCheckout ? (
          <>
            <div className="cart-items">
              {cart.length === 0 && <p>Your cart is empty</p>}

              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price}</p>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-selector">
                      <button onClick={() => updateQty(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total</span>
                  <span>${total}</span>
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
          <CheckoutForm total={total} back={() => setShowCheckout(false)} />
        )}
      </div>
    </div>
  );
};

export default CartModal;
