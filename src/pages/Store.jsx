import React, { useState } from "react";
import products from "../components/products";
import ProductCard from "../components/ProductCard";
import FloatingCart from "../components/FloatingCart";

const Store = ({ cart, addToCart, openCart }) => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="store" id="store">
      <div className="section-container">
        <div className="store-header">
          <h2 className="section-title"  style={{ textAlign: "center" }}>
            LHOH Store
          </h2>
        </div>

        <div className="store-tabs">
          {["all", "apparel", "home"].map((cat) => (
            <button
              key={cat}
              className={`store-tab ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="products-grid">
  {filteredProducts.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      addToCart={addToCart}
      showSize={index !== filteredProducts.length - 1} // ❌ hide size on last product
    />
  ))}
</div>
      </div>

      <FloatingCart cart={cart} openCart={openCart} />
    </section>
  );
};

export default Store;
