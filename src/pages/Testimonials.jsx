import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';

const Testimonials = () => {
  return (
    <main>
      <PageHero title="Testimonials" subtitle="See what our members have to say about their transformation journey." />
      <TestimonialsSection />
    </main>
  );
};

export default Testimonials;
