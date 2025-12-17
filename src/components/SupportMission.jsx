// SupportMission.jsx
import React from "react";

const supportOptions = [
  {
    icon: "💝",
    title: "One-Time Donation",
    description:
      "Make a direct impact with a one-time contribution to support our programs and initiatives.",
    link: "#donate",
    linkText: "Donate Now",
    external: false,
  },
  {
    icon: "🔄",
    title: "Monthly Giving",
    description:
      "Become a sustaining partner with recurring monthly donations to create lasting change.",
    link: "https://sites.google.com/view/legacyhandsofhope/give",
    linkText: "Join Monthly",
    external: true,
  },
  {
    icon: "🛍️",
    title: "Shop Merchandise",
    description:
      "Purchase LHOH merchandise and apparel. 100% of proceeds support our mission.",
    link: "#store",
    linkText: "Shop Now",
    external: false,
  },
  {
    icon: "🤝",
    title: "Volunteer",
    description:
      "Join our team of dedicated volunteers and directly impact the communities we serve.",
    link: "mailto:LegacyHandsofHope@gmail.com?subject=Volunteer Inquiry",
    linkText: "Get Involved",
    external: true,
  },
];

const SupportMission = () => {
  return (
    <section className="support-mission">
      <div className="section-container">
        <h2>Support Our Mission</h2>
        <p>
          Every contribution makes a difference. Choose how you'd like to support
          Legacy Hands of Hope and help us empower communities with hope.
        </p>

        <div className="support-options">
          {supportOptions.map((option, index) => (
            <div className="support-card" key={index}>
              <div className="support-icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <a
                href={option.link}
                className="support-btn"
                target={option.external ? "_blank" : "_self"}
                rel={option.external ? "noopener noreferrer" : undefined}
              >
                {option.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportMission;
