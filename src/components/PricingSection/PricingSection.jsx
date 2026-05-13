import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './PricingSection.css';

const plans = [
  {
    name: 'Basic Plan',
    price: '29',
    features: ['Gym Access', 'Locker Access', 'Free WiFi', 'Standard Equipment', '1 Group Class/Month'],
    recommended: false,
    delay: 100
  },
  {
    name: 'Pro Plan',
    price: '59',
    features: ['All Basic Access', 'Personal Trainer', 'Diet Plan', 'Steam Bath', 'Unlimited Group Classes', 'Priority Support'],
    recommended: true,
    delay: 200
  },
  {
    name: 'Elite Plan',
    price: '99',
    features: ['All Pro Access', 'Elite Trainer', 'Massage Therapy', 'Sauna Access', 'Weekly Progress Meet', 'Family Membership'],
    recommended: false,
    delay: 300
  }
];

const PricingSection = () => {
  return (
    <section className="pricing-section section-padding" id="pricing">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="subtitle">PRICING PLANS</span>
          <h2 className="section-title">CHOOSE YOUR <span>PLAN</span></h2>
        </div>
        
        <div className="row g-4 align-items-center">
          {plans.map((plan, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={plan.delay}>
              <div className={`pricing-card ${plan.recommended ? 'recommended neon-border' : 'glass-card'}`}>
                {plan.recommended && <div className="popular-badge">Most Popular</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}><FaCheck className="icon" /> {feature}</li>
                  ))}
                </ul>
                <button className={`btn ${plan.recommended ? 'btn-premium' : 'btn-outline-light'} w-100 mt-4`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
