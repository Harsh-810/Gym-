import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import BMISection from '../components/BMISection/BMISection';

const BMICalculator = () => {
  return (
    <main>
      <PageHero title="BMI Calculator" subtitle="Check your Body Mass Index and know your health status instantly." />
      <BMISection />
    </main>
  );
};

export default BMICalculator;
