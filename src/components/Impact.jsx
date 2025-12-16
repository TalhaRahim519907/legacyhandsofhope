// Impact.jsx
import React from "react";

const Impact = () => {
  return (
    <section className="impact">
      <div className="impact-content">
        <h2 className="impact-title">Where LHOH Makes a Difference</h2>
        <p className="impact-subtitle">
          Our impact primarily targets communities within the African and Caribbean diaspora
        </p>
        <div className="impact-grid">
          <div className="impact-card">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkfmF2he5cdbyMu0l9niZp1JlAmKnhrB5i0uE2_nsWnSPqtYBlSiPL56e3Ts1sgICLQvaaaNTesHIglPVm2tZMM8fC8onIrHMbQcXyGCUSoEO6kt8YTerpj-c_RXUzhN6PF9Wuktv1WxFCFcqGVwVjC-ZWdmi1CzC2XjneMz4-GvOqnJxCyIWtHA709HFhfRHYRQiXdBRzo1EnXVzJLW4qFZf5vjcT3noQ-GwrI=w1280" 
              alt="Urban Communities" 
              className="impact-card-image"
            />
            <div className="impact-card-content">
              <h3>Urban Communities</h3>
              <p>
                Empowering individuals in urban areas with access to education, resources, and opportunities for growth.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkf3EkTw7D_S0vqL30Lmn7JaxZEcx5lGaNzHSBd34g-oNBUZhZQYx7rRl70eqlEqxIVCHy2fEtwmeMD16t2wGilU7HZjpbRlJiL2bPjkLJ_14e1fOFv8QCOA4gV2PlXa2AoVUxm7fPy6UeAbQCF3IsUkOojfjFbdNeMJCvUmT6IEDV5hLGqrwIw1iXkYf3v7nfaq7OiKet4Ghypo0aG4tq2wdBI5-vN8TXYf=w1280" 
              alt="Caribbean Diaspora" 
              className="impact-card-image"
            />
            <div className="impact-card-content">
              <h3>Caribbean Diaspora</h3>
              <p>
                Supporting Caribbean communities through educational initiatives and essential resource provision.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/AAzXCkdgrUsd88gNBVKMGVoJzArzeqd8mrfxpnDaJvS2M43bziS6Sqy2uUilqfvLy84DWCK7nULlqH51nkzfX452UcqZYtZ3BGiF-Q8lkOl9hUgM3RANL4ki1-rRaTC8M2utqluXBRsQol0JL1qtIeNNF8TvjfMvT_-aP4xYHF-tKsYwneDF9VA5yzI9gh9tBwRBms6HJr43JpRqEzIPF0Zxdsre4i9oZ559o9dbC1s=w1280" 
              alt="African Diaspora" 
              className="impact-card-image"
            />
            <div className="impact-card-content">
              <h3>African Diaspora</h3>
              <p>
                Breaking down barriers to economic and educational opportunities across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
