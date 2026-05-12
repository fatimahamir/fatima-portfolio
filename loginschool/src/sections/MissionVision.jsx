
import React from 'react';
import image from '../assets/istockphoto-92184657-612x612.jpg';

const MissionVision = () => {
  return (
    <section id="missionvission" className="py-5 my-5">
      <div className="container">
        <h1 className="text-center text-dark fw-bold mb-4">OUR MISSION & VISION</h1>
        <div className="row align-items-center g-4">
         
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <img 
                src={image} 
                alt="Student with painted hands"
                className="img-fluid rounded shadow-sm" 
                style={{ maxWidth: '100%', height: 'auto' }} 
              />
            </div>
          </div>
          
          
          <div className="col-md-6">
            <div className="p-3 p-md-4 bg-light rounded shadow-sm">
              <h3 className="text-warning fw-bold mb-2">MISSION</h3>
              <p className="mb-4">
                To make quality education accessible to the students coming from
                different religions, caste, creed, and different strata of the
                society and to provide the same to them as per their individual
                choices and inclination at affordable prices.
              </p>
              <h3 className="text-warning fw-bold mb-2">VISION</h3>
              <p className="mb-0">
                Our school aims to provide value based education with innovative
                teaching and learning methods so that our students grow up to be
                aesthetically reach intellectually aware and completely responsible
                individuals who will be capable of fulfilling their dreams and
                strengthen the society. We intend to, with our educational process
                to be the cutters who polish raw stones into glittering multifaceted
                diamonds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;