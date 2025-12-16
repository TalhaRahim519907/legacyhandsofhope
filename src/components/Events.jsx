// Events.jsx
import React from "react";

const Events = () => {
  const events = [
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkcuObnsz0IlX70q0AedVTC12IQKM1ep4LYj7dfHJE6BPoNUp29NjAkeqYFs3XWoI6VfDCdStY4k-hG7wx2qKvMYxWEGM7nJgqyL57PxVPH_DXMlJdlYQ9HgVBdvJYnOgIVgcff7VEV2w3kh5hvCHgaLDdftsSMOzgzUDn7Dgnm7XCIL0o41xuHxdZL1yDf1sRmpWqBlKvLUYbX1pygye9bkZCXtIoc20m_zR6U=w1280",
      link: "https://sites.google.com/view/legacyhandsofhope/events",
      btnText: "PURCHASE TIX",
      alt: "Christmas Fundraising Gala"
    },
    {
      img: "https://lh3.googleusercontent.com/sitesv/AAzXCkfKO1IHcsnTozY__pw5y8GOmi2E11H8eRD5XcMp1e5CoNnvVIKqOBlUcKSH7xcAjR-bFpcKcbKWp7V82gviW4vIroHY26-QIfOsK9uiseyOqvRe0FbssmWS1aIaVxxhWTw8onbCR3ACYLxOEBzJAjDAdMYyolLubtJUpXVCbwCQA0sPDtag3toh6DJXQ3FQhr8az4tJIe-OjXdPwAkVgS-tcfxz--cDvHkSfv4=w1280",
      link: "https://sites.google.com/view/legacyhandsofhope/give",
      btnText: "SHOP NOW",
      alt: "Merchandise"
    }
  ];

  return (
    <section className="events" id="events">
      <div className="section-container">
        <h2 className="section-title" style={{ color: "white", textAlign: "center" }}>
          UPCOMING EVENTS
        </h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.img} alt={event.alt} />
              <div className="event-card-content">
                <a href={event.link} className="event-btn">{event.btnText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
