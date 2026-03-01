// src/components/Ghana.jsx
import React from "react";
import "./Ghana.css";

// Change 5 to however many images you have
const images = Array.from({ length: 10 }, (_, i) =>
  require(`../assets/g${i + 1}.jpeg`)
);

const Ghana = () => {
  return (
    <section className="ghana-section">
      
      {/* Center Heading */}
      <div className="ghana-header">
        <h1>Ghana Missionary Trip</h1>
        <p>Highlights and memorable moments from our Ghana mission trip 🇬🇭</p>
      </div>

      {/* Image Grid */}
      <div className="ghana-grid">
        {images.map((image, index) => (
          <div key={index} className="ghana-card">
            <img src={image} alt={`Ghana Mission ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Ghana;