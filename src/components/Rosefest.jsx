import "./Rosefest.css";

// Change 15 if your image count is different
const images = Array.from({ length: 15 }, (_, i) =>
  require(`../assets/r${i + 1}.jpeg`)
);

const Rosefest = () => {
  return (
    <section className="rosefest-section">

      {/* Center Heading */}
      <div className="rosefest-header">
        <h1>Rose Fest Fund Raising Events</h1>
        <p>Beautiful memories from our Rose Fest celebrations 🌹</p>
      </div>

      {/* Image Grid */}
      <div className="rosefest-grid">
        {images.map((image, index) => (
          <div key={index} className="rosefest-card">
            <img src={image} alt={`Rosefest ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Rosefest;