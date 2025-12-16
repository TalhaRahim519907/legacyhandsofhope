// Mission.jsx
import React from "react";

const Mission = () => {
  return (
    <section className="mission" id="about">
      <div className="section-container">
        <div className="mission-grid">
          <div className="mission-logo">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkco5sXuyedZfm-8Zla9u3KGJ3J2waZQT112urk8y3bRMCcAr0TYNsBU1FC9B0gPU6AwGMzS82wuLA6Kg0s2LiW_ZYewJQvQPU0wcNnZZWipR30VOF-bt9UTxarZDMlI6-wMqR0fz_Z2IZXrbAnonYefiOzIZL66tTrcM-rA6MZNHCRrk4zT43Fxvhmr7jk7BV_wWc5_j97Y_fO5sC2M--1fmJaIEIHSIueeTaM=w1280" 
              alt="Legacy Hands of Hope Logo"
            />
          </div>
          <div className="mission-content">
            <h2 className="section-title">MISSION</h2>
            <p className="mission-text">
              Legacy Hands of Hope (LHOH) is a nonprofit organization dedicated to empowering individuals and communities within the African and Caribbean diaspora. Through compassionate support, educational initiatives, and the provision of essential resources, LHH fosters resilience, sustainable change, and self-sufficiency.
            </p>
            <div className="mission-highlight">
              <p>
                LHOH seeks to support and uplift individuals and communities within the African and Caribbean diaspora who face barriers such as limited access to education, economic instability, and lack of resources. We believe that by providing the right tools, guidance, and opportunities, every individual has the potential to overcome obstacles and lead a fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
