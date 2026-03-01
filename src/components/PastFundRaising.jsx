import React from "react";
import rosepastImg from "../assets/rose-past.jpeg";
import galapast from "../assets/gala-past.jpeg";
import valentinepost from "../assets/valentine-post.jpg"

const PastFundRaising = () => {
  const galleryItems = [
    {
      img: rosepastImg,
      link: "/rosefest",
      alt: "Rose Fest",
      text: "Rose Fest Fund Raising Events →"
    },
    {
      img: galapast,
      link: "/christmasgala",
      alt: "LHOH Website Gallery",
      text: "Christmas Fund Raising Gala →"
    },
    {
      img: valentinepost,
      link: "/valentine",
      alt: "LHOH Website Gallery",
      text: "Valentine's Virtual FundRaising →"
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
            <div className="gallery-card-1" key={index}>
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
