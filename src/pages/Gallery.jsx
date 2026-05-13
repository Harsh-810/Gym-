import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import GallerySection from '../components/GallerySection/GallerySection';

const Gallery = () => {
  return (
    <main>
      <PageHero title="Our Gallery" subtitle="Take a look at our state-of-the-art facilities and happy members." />
      <GallerySection />
    </main>
  );
};

export default Gallery;
