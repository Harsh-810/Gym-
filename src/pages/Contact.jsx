import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <main>
      <PageHero title="Contact Us" subtitle="Have questions? We're here to help you start your journey." />
      <section className="contact-page section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-info-card glass-card">
                <h2 className="mb-4">Get In Touch</h2>
                <div className="info-item">
                  <div className="icon-box"><FaMapMarkerAlt /></div>
                  <div>
                    <h4>Location</h4>
                    <p>123 Fitness Street, Jaipur, Rajasthan</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><FaPhoneAlt /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 12345 67890</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><FaEnvelope /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@gympro.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><FaClock /></div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon-Sat: 5:00 AM - 10:00 PM<br />Sun: 7:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7" data-aos="fade-left">
              <div className="contact-form-wrapper glass-card">
                <h2 className="mb-4">Send Us A Message</h2>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control glass-input" placeholder="Full Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control glass-input" placeholder="Email Address" required />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" className="form-control glass-input" placeholder="Phone Number" required />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select glass-input">
                        <option value="">Select Fitness Goal</option>
                        <option value="weight-loss">Weight Loss</option>
                        <option value="muscle-gain">Muscle Gain</option>
                        <option value="fitness">General Fitness</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control glass-input" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-premium w-100">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="row mt-5" data-aos="fade-up">
            <div className="col-12">
              <div className="map-container glass-card overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.33230678853!2d75.71391585820312!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1683900000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
