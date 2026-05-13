import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import TrainersSection from '../components/TrainersSection/TrainersSection';

const Trainers = () => {
  return (
    <main>
      <PageHero title="Expert Trainers" subtitle="Our certified professionals are here to guide you every step of the way." />
      <TrainersSection />
    </main>
  );
};

export default Trainers;
