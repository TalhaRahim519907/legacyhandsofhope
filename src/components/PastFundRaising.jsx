import React from "react";
import rosepastImg from "../assets/rose-past.jpeg";
import galapast from "../assets/gala-past.jpeg";
const PastFundRaising = () => {
  const galleryItems = [
    {
      img: rosepastImg,
      link: "https://photos.app.goo.gl/vygpiX4JMMcqbbZc6",
      alt: "Rose Fest",
      text: "Rose Fest Fund Raising Events →"
    },
    {
      img: galapast,
      link: "https://drive.google.com/drive/folders/1cVPSUaa4QpS6On95soU5_MpCkKUA1DAH?usp=sharing",
      alt: "LHOH Website Gallery",
      text: "Christmas Fund Raising Gala →"
    }
  ];

  return (
    <section className="gallery">
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          PAST FUND RAISING EVENTS 
        </h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.img} alt={item.alt} />
              <div className="gallery-overlay">
                <a href={item.link} className="gallery-link">{item.text}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastFundRaising;
