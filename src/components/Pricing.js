import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '300',
      description: 'Perfect for simple medication needs',
      features: [
        'Up to 3 medicines',
        'Monthly delivery',
        'Basic packaging',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '500',
      description: 'Most popular for chronic conditions',
      features: [
        'Up to 6 medicines',
        'Bi-weekly delivery',
        'Smart packaging',
        'Priority support',
        'Mobile app + reminders',
        'Pharmacy consultation'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '800',
      description: 'Comprehensive care package',
      features: [
        'Unlimited medicines',
        'Weekly delivery',
        'Premium packaging',
        '24/7 support',
        'Full app features',
        'Doctor consultation',
        'Health tracking'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">
          Choose the plan that fits your medication needs. Medicine costs are separate at MRP.
        </p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="plan-btn">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;