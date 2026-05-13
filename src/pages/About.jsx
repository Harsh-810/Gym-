import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import AboutSection from '../components/AboutSection/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';

const About = () => {
  return (
    <main>
      <PageHero title="About Us" subtitle="Discover our story and our passion for fitness." />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
};

export default About;
