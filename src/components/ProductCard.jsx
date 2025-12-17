import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name || "Product image"} className="product-image" />
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price}</div>

        <div className="product-actions">
          <div className="quantity-selector">
            <button
              className="quantity-btn"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="quantity-display">{qty}</span>
            <button
              className="quantity-btn"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>

          <button
            className="add-to-cart-btn"
            style={added ? { background: "#10b981" } : {}}
            onClick={handleAdd}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
