import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './FreeTrial.css';

const FreeTrial = () => {
  return (
    <main>
      <PageHero title="Free Trial" subtitle="Get a 3-day free pass to experience our premium facilities." />
      <section className="free-trial-page section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="trial-form-card glass-card text-center" data-aos="zoom-in">
                <h2 className="mb-4">Activate Your <span>Free Pass</span></h2>
                <p className="mb-5">Fill in your details below and we will send you a digital pass to your email.</p>
                
                <form>
                  <div className="row g-4">
                    <div className="col-md-6 text-start">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control glass-input" placeholder="Enter your name" required />
                    </div>
                    <div className="col-md-6 text-start">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control glass-input" placeholder="Enter your email" required />
                    </div>
                    <div className="col-md-6 text-start">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control glass-input" placeholder="Enter your phone" required />
                    </div>
                    <div className="col-md-6 text-start">
                      <label className="form-label">Preferred Branch</label>
                      <select className="form-select glass-input">
                        <option value="jaipur-main">Jaipur Main Branch</option>
                        <option value="jaipur-west">Jaipur West Branch</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-premium btn-lg w-100 py-3">Get My Free Pass</button>
                    </div>
                  </div>
                </form>
                
                <div className="trial-features mt-5">
                  <div className="row">
                    <div className="col-4">
                      <div className="trial-feature-item">
                        <span className="number">01</span>
                        <p>Fill Form</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="trial-feature-item">
                        <span className="number">02</span>
                        <p>Get Email</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="trial-feature-item">
                        <span className="number">03</span>
                        <p>Start Gym</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FreeTrial;
