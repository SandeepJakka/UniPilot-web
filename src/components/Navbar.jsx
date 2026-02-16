
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <div className="logo-box">U</div>
          <span>UniPilot</span>
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#why-unipilot" className="nav-link">Why UniPilot</a>
          <a href="#security" className="nav-link">Security</a>
          <a href="#benefits" className="nav-link">Benefits</a>
        </div>
        <div className="actions">
          <button className="btn-login">Log In</button>
          <button className="btn-demo">Schedule Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
