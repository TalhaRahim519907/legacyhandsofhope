import React from "react";

const FloatingCart = ({ cart, openCart }) => {
  const count = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="floating-cart" onClick={openCart}>
      🛒
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
};

export default FloatingCart;
