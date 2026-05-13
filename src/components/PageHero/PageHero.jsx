import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle }) => {
  return (
    <div className="page-hero">
      <div className="container text-center">
        <h1 data-aos="fade-up">{title}</h1>
        <p data-aos="fade-up" data-aos-delay="200">{subtitle}</p>
        <div className="breadcrumb-custom" data-aos="fade-up" data-aos-delay="400">
          Home / <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
