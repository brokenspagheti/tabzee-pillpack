import React from 'react';
import './Hero.css';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Medication Packaging
            <span className="gradient-text"> Made Simple</span>
          </h1>
          <p className="hero-subtitle">
            Transform medication adherence through intelligent packaging solutions.
            Organize, track, and manage your medications with ease.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">300M+</div>
              <div className="stat-label">Chronic Disease Patients</div>
            </div>
            <div className="stat">
              <div className="stat-number">150M+</div>
              <div className="stat-label">Elderly Population</div>
            </div>
            <div className="stat">
              <div className="stat-number">₹10,000Cr+</div>
              <div className="stat-label">Market Opportunity</div>
            </div>
          </div>
          <button className="hero-cta" onClick={onGetStarted}>
            Build Your Pill Pack Now
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;