import React, { useState, useEffect } from "react";

// Static products data
const productsData = [
  {
    id: 1,
    name: "LHOH Classic T-Shirt",
    category: "apparel",
    price: 29.99,
    description: "Premium cotton t-shirt with LHOH logo",
    image: "https://via.placeholder.com/300x300/2563eb/ffffff?text=LHOH+T-Shirt",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Hope Hoodie",
    category: "apparel",
    price: 54.99,
    description: "Comfortable hoodie with inspiring message",
    image: "https://via.placeholder.com/300x300/10b981/ffffff?text=Hope+Hoodie",
    badge: "New",
  },
  // ... add the rest of your products here
];

function CartAndStore() {
  const [products, setProducts] = useState([]);

  // Initialize products
  useEffect(() => {
    setProducts(productsData);
  }, []); // No ESLint warning because productsData is static

  return (
    <section className="store" id="store">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: "center" }}>LHOH Store</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">${product.price.toFixed(2)}</div>
                {/* Quantity and Add to Cart buttons go here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartAndStore;
