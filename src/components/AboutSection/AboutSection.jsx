import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './AboutSection.css';

const aboutImg = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop";

const AboutSection = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img src={aboutImg} alt="About Gym" className="img-fluid about-img" />
              <div className="experience-badge">
                <h3>20+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="glow-effect"></div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content ps-lg-5 mt-5 mt-lg-0">
              <span className="subtitle">ABOUT OUR GYM</span>
              <h2 className="section-title text-start mb-4">
                WE PROVIDE <span>MODERN FITNESS</span> SOLUTIONS
              </h2>
              <p className="description">
                At GYMPRO, we believe in pushing limits and breaking barriers. Our state-of-the-art facility is designed to provide the ultimate workout experience, combined with expert guidance to help you reach your goals faster.
              </p>
              
              <div className="features-list mt-4">
                {[
                  'Professional Trainers',
                  'Modern Equipment',
                  'Custom Workout Plans',
                  'Nutrition Counseling',
                  'Group Fitness Classes',
                  'Steam & Sauna Access'
                ].map((item, index) => (
                  <div className="feature-item" key={index}>
                    <FaCheckCircle className="icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-premium mt-5">Learn More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
