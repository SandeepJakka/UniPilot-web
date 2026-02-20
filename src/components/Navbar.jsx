import React, { useState } from 'react';
import './Navbar.css';
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo1} alt="UniPilot Logo" className="logo-img" />
          <span className="logo-text">
            <span className="logo-uni">Uni</span><span className="logo-pilot">Pilot</span>
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#why-unipilot" className="nav-link" onClick={() => setIsMenuOpen(false)}>Why UniPilot</a>
          <a href="#security" className="nav-link" onClick={() => setIsMenuOpen(false)}>Security</a>
          <a href="#benefits" className="nav-link" onClick={() => setIsMenuOpen(false)}>Benefits</a>
          <a href="#teams" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Team</a>

          {/* Mobile Actions */}
          <div className="mobile-actions">
            {/* <button className="btn-login">Log In</button> */}
            <button className="btn-demo" onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}>Schedule Demo</button>
            <button className="btn-demo1" onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}>Contact Us</button>
          </div>
        </div>

        <div className="actions desktop-only">
          {/* <button className="btn-login">Log In</button> */}
          <button className="btn-demo" onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}>Schedule Demo</button>
          <button className="btn-demo1" onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
