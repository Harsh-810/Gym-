import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/911234567890" 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
      <span className="tooltip-text">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
