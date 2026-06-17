import React, { useState } from "react";

const ProductCard = ({ product, addToCart, showSize = true }) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("Medium"); // default size
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ ...product, size }, qty); // include size in cart
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
        {product.name.includes("T-SHIRTS") && (
  <p className="size-note">Shirts run small. Order a size up.</p>
)}

        {/* Size Selector */}
        {showSize && (
          
  <div className="size-selector">
    <span>Select Size: </span>

    {["Medium", "Large", "XL", "2XL", "3XL"].map((s) => (
      <button
        key={s}
        className={`size-btn ${size === s ? "selected" : ""}`}
        onClick={() => setSize(s)}
      >
        {s}
      </button>
    ))}

  </div>
)}
 
 {product.name !== "SHIPPING FEE" && (
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
         )}
      </div>
    </div>
  );
};

export default ProductCard;