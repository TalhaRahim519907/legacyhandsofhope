import React from "react";
import "./ChristmasGala.css";

// Change 15 to your actual number of images
const images = Array.from({ length: 15 }, (_, i) =>
  require(`../assets/c${i + 1}.jpeg`)
);

const ChristmasGala = () => {
  return (
    <section className="christmasgala-section">
      
      {/* Center Heading */}
      <div className="christmasgala-header">
        <h1>Christmas Fund Raising Gala</h1>
        <p>Memorable moments from our joyful celebration 🎄</p>
      </div>

      {/* Image Grid */}
      <div className="christmasgala-grid">
        {images.map((image, index) => (
          <div key={index} className="christmasgala-card">
            <img src={image} alt={`Christmas Gala ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default ChristmasGala;