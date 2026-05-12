
import React from 'react';
import bgImage from '../assets/imgi_19_bg_1.jpg'; 

const Subscribe = () => {
  return (
    <div 
      className="py-5 mt-5 position-relative" 
      style={{
        background: `url(${bgImage}) no-repeat center center`, 
        backgroundSize: 'cover',
      }}
    >
      
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ backgroundColor: '#000' }}></div>
      <div className="container position-relative z-2 text-light">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="fw-bold">Subscribe to us!</h3>
            <p className="mb-0">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia,
            </p>
          </div>
          <div className="col-lg-6 d-flex gap-2">
            <input type="email" className="form-control" placeholder="Enter your email" />
            <button className="btn btn-success">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;