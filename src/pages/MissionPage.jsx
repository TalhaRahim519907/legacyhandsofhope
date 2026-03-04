// src/pages/MissionPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/MissionPage.css";

import ghanaImg from "../assets/ghana.jpeg";
import liberiaImg from "../assets/l8.jpeg";

const MissionPage = () => {
  const navigate = useNavigate();

  const trips = [
    { img: ghanaImg, title: "Ghana Mission 2025 ", path: "/ghana" },
    { img: liberiaImg, title: "Liberia Mission 2026", path: "/liberia" },
  ];

  return (
    <section className="mission-page">
      <h1 className="mission-page-title">Our Missions</h1>

      <div className="mission-grid">
        {trips.map((trip, idx) => (
          <div
            key={idx}
            className="mission-card"
            onClick={() => navigate(trip.path)}
          >
            <img src={trip.img} alt={trip.title} />
            <div className="mission-card-overlay">
              <h2>{trip.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionPage;