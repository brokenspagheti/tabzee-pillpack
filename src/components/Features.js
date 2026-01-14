import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Organization',
      description: 'Organize medications by time, dosage, and frequency with intelligent packaging'
    },
    {
      icon: '📱',
      title: 'Digital Tracking',
      description: 'Track medication adherence with mobile app integration and reminders'
    },
    {
      icon: '🔒',
      title: 'Safe & Secure',
      description: 'Child-proof packaging with tamper-evident seals for safety'
    },
    {
      icon: '🚚',
      title: 'Home Delivery',
      description: 'Monthly delivery of pre-sorted medication packs to your doorstep'
    },
    {
      icon: '💊',
      title: 'Pharmacy Integration',
      description: 'Direct integration with licensed pharmacies for authentic medicines'
    },
    {
      icon: '👨‍⚕️',
      title: 'Doctor Approved',
      description: 'Verified by healthcare professionals for accuracy and safety'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why Choose TABZEE?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;