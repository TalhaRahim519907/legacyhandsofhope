// Header.jsx
import React, { useState } from "react";
import logoImg from "../assets/logo.jpg"; // apna logo path

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
          {/* Logo Image */}
          <img src={logoImg} alt="Legacy Hands of Hope" className="logo-icon" />
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
