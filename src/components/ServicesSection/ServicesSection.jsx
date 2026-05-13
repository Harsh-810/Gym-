import React from 'react';
import { FaDumbbell, FaHeartbeat, FaRunning, FaUserTie, FaAppleAlt, FaFire } from 'react-icons/fa';
import './ServicesSection.css';

const services = [
  {
    title: 'Weight Training',
    description: 'Build muscle and strength with our wide range of free weights and machines.',
    icon: <FaDumbbell />,
    delay: 100
  },
  {
    title: 'Cardio Training',
    description: 'Improve your cardiovascular health with our top-of-the-line treadmills and ellipticals.',
    icon: <FaRunning />,
    delay: 200
  },
  {
    title: 'CrossFit',
    description: 'High-intensity functional movements designed to keep you agile and strong.',
    icon: <FaFire />,
    delay: 300
  },
  {
    title: 'Personal Training',
    description: 'Get one-on-one guidance from our certified professional trainers.',
    icon: <FaUserTie />,
    delay: 400
  },
  {
    title: 'Nutrition Plans',
    description: 'Customized meal plans to fuel your workouts and achieve your body goals.',
    icon: <FaAppleAlt />,
    delay: 500
  },
  {
    title: 'Yoga Classes',
    description: 'Balance your body and mind with our professional yoga instructors.',
    icon: <FaHeartbeat />,
    delay: 600
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="subtitle">OUR SERVICES</span>
          <h2 className="section-title">WHAT WE <span>OFFER</span></h2>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="service-card glass-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="read-more">Learn More</a>
                <div className="card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
