import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import CTASection from '../components/CTASection/CTASection';

const Services = () => {
  return (
    <main>
      <PageHero title="Our Services" subtitle="We offer a wide range of programs to help you achieve your goals." />
      <ServicesSection />
      <CTASection />
    </main>
  );
};

export default Services;
