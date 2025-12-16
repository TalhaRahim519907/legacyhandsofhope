// Header.jsx
import React, { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Legacy Hands of Hope</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#events" onClick={closeMenu}>Events</a></li>
          <li><a href="#give" onClick={closeMenu}>Give</a></li>
          <li><a href="#team" onClick={closeMenu}>Team</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
