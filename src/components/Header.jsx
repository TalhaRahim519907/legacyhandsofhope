import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/About_Logo-removebg-preview.png";

function Header() {
  const [open, setOpen] = useState(false);

  // Body scroll lock when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="nav-container">
          {/* Logo + Heading */}
          <a href="/" className="logo" onClick={() => setOpen(false)}>
            <img src={logo} alt="Logo" />
            <span className="logo-text">Legacy Hands of Hope</span>
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Nav Menu */}
          <ul className={`nav-menu ${open ? "show" : ""}`}>
            <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="/mission" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="/EventsPage" onClick={() => setOpen(false)}>Events</a></li>
            <li><a href="/give" onClick={() => setOpen(false)}>Give</a></li>
            <li><a href="/team" onClick={() => setOpen(false)}>Team</a></li>
          </ul>
        </div>
      </header>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Header;
