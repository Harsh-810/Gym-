import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import PricingSection from '../components/PricingSection/PricingSection';
import CTASection from '../components/CTASection/CTASection';

const Membership = () => {
  return (
    <main>
      <PageHero title="Membership" subtitle="Join our community and start your fitness journey today." />
      <PricingSection />
      <CTASection />
    </main>
  );
};

export default Membership;
