// src/components/Guyana.jsx
import React from "react";
import "./Guyana.css";

const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("../assets", false, /^\.\/T\d+\.(png|jpe?g|svg)$/)
);

const Guyana = () => {
  return (
    <section className="guyana-section">

      {/* Center Heading */}
      <div className="guyana-header">
        <h1>Guyana Missionary Trip 2026</h1>
        <p>Highlights and impactful moments from our Guyana mission 🇬🇾</p>
      </div>

      {/* Image Grid */}
      <div className="guyana-grid">
        {images.map((image, index) => (
          <div key={index} className="guyana-card">
            <img src={image} alt={`Guyana Mission ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Guyana;