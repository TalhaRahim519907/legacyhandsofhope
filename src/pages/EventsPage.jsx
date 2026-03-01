// src/pages/EventsPage.jsx
import React from "react";
import "../pages/EventPage.css"; // Your existing CSS
import eventtsimg from "../assets/UP-img.jpeg";
import PastFundRaising from "../components/PastFundRaising";

const EventsPage = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="page-title">
        <h1>UPCOMING EVENTS</h1>
      </div>

      {/* Main Container */}
      <div className="main-container">
        {/* Mission Trip Banner */}
        <div className="mission-banner-wrapper">
          <a
            href="https://www.zeffy.com/en-US/ticketing/legacy-hands-of-hope-rose-fest-fundraising--2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mission-banner">
              <img
                src={eventtsimg}
                alt="Guyana 2026 Missionary Trip"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Past Fundraising Events */}
      <PastFundRaising />
    </div>
  );
};

export default EventsPage;