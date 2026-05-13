import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section pt-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="footer-about">
              <h3>GYM<span>PRO</span></h3>
              <p>We are dedicated to helping you achieve your fitness goals through professional guidance and a world-class training environment.</p>
              <div className="footer-social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Weight Training</a></li>
                <li><a href="#">Cardio Training</a></li>
                <li><a href="#">CrossFit</a></li>
                <li><a href="#">Yoga Classes</a></li>
                <li><a href="#">Personal Trainer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li><FaMapMarkerAlt className="icon" /> 123 Fitness Street, Jaipur, Rajasthan</li>
                <li><FaPhoneAlt className="icon" /> +91 12345 67890</li>
                <li><FaEnvelope className="icon" /> info@gympro.com</li>
              </ul>
              <div className="newsletter mt-4">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Email Address" />
                  <button className="btn btn-premium">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom mt-5 py-4 border-top border-dark text-center">
          <p className="mb-0">&copy; 2026 GYMPRO. All Rights Reserved. Designed by Antigravity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
