import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper glass-card" data-aos="zoom-in">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>BECOME A PART OF OUR <span>FITNESS FAMILY</span></h2>
              <p>Get started today and transform your life with our premium membership plans and expert trainers.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/membership" className="btn btn-premium btn-lg">Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
