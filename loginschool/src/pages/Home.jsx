
import React from 'react';
import Carousel from '../sections/Carousel';
import AboutUs from '../sections/AboutUs';
import MissionVision from '../sections/MissionVision';
import Statistics from '../sections/Statistics';
import Testimonials from '../sections/Testimonials';
import Subscribe from '../sections/Subscribe';
import AdmissionModal from '../modals/AdmissionModal';

const Home = () => {
  return (
    <>
    <main>
      <Carousel />
      <AboutUs />
      <MissionVision />
      <Statistics />
      <Testimonials />
      <Subscribe />
      
    </main>
        <AdmissionModal />
    </>
  );
};

export default Home;