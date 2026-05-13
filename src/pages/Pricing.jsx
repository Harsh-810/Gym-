import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import PricingSection from '../components/PricingSection/PricingSection';

const Pricing = () => {
  return (
    <main>
      <PageHero title="Membership Plans" subtitle="Choose the plan that fits your lifestyle and fitness goals." />
      <PricingSection />
    </main>
  );
};

export default Pricing;
