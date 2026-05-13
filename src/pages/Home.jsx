import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import PricingSection from '../components/PricingSection/PricingSection';
import TrainersSection from '../components/TrainersSection/TrainersSection';
import GallerySection from '../components/GallerySection/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import BMISection from '../components/BMISection/BMISection';
import CTASection from '../components/CTASection/CTASection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TrainersSection />
      <GallerySection />
      <BMISection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;
