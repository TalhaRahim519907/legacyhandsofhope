// src/components/Liberia.jsx
import React from "react";
import "./Liberia.css";

// Automatically import all images that start with "l"
const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context("../assets", false, /^\.\/l\d+\.(png|jpe?g|svg)$/)
);

const Liberia = () => {
  return (
    <section className="liberia-section">
      
      {/* Center Heading */}
      <div className="liberia-header">
        <h1>Liberia Missionary Trip</h1>
        <p>Highlights and impactful moments from our Liberia mission 🇱🇷</p>
      </div>

      {/* Image Grid */}
      <div className="liberia-grid">
        {images.map((image, index) => (
          <div key={index} className="liberia-card">
            <img src={image} alt={`Liberia Mission ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Liberia;