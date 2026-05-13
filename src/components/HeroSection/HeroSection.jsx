import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const heroBg = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-bg-image" style={{ backgroundImage: `url(${heroBg})` }}></div>
      
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <motion.span 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                UNLEASH YOUR INNER BEAST
              </motion.span>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                TRANSFORM YOUR BODY INTO A <span>POWERFUL MACHINE</span>
              </motion.h1>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Join the best premium fitness center and unlock your true potential with professional trainers and advanced workout programs.
              </motion.p>
              
              <motion.div 
                className="hero-btns"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link to="/membership" className="btn btn-premium me-3">Join Today</Link>
                <Link to="/free-trial" className="btn btn-outline-light btn-lg">Start Free Trial</Link>
              </motion.div>

              <div className="hero-stats mt-5">
                <div className="row">
                  {[
                    { number: '1500+', label: 'Members' },
                    { number: '50+', label: 'Trainers' },
                    { number: '20+', label: 'Years Exp' },
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="col-4 col-md-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <h3 className="stat-number">{stat.number}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mouse"
        >
          <div className="wheel"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
