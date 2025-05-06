import React from 'react';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import WhyChooseUs from '../components/WhyChooseUs';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
    </>
  );
}

export default Home;