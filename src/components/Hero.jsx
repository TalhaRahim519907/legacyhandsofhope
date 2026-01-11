// Hero.jsx
import React, { useState, useEffect } from "react";
import heroBg from "../assets/hero-Bg.jpg"; 
import slider1 from "../assets/silder1.jpeg"; 
import slider2 from "../assets/slider2.jpeg"; 
import slider3 from "../assets/slider3.jpeg"; 


const images = [heroBg, slider1, slider2,slider3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div className="hero-content">
        <h1>LEGACY HANDS OF HOPE</h1>
        <p className="hero-tagline">"Empowering Communities with Hope"</p>
      </div>

      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;