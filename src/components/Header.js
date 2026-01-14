import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">💊</span>
            <span className="logo-text">TABZEE</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <button className="btn-primary">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;