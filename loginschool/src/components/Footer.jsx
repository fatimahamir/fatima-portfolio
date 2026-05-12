
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark py-5" style={{ backgroundColor: '#1a2e4d', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <a className="text-decoration-none fs-5 text-warning fw-bold" href="#">
                <i className="fa-solid fa-graduation-cap text-warning fs-6"></i> JOS School
              </a>
            </div>
            <p className="small mb-3 text-light">
              Shaping futures through excellence in education
            </p>
            <a href="#" className="text-warning small fw-bold">Learn More</a>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h6 className="mb-3 text-light" >
              Our Campus
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#aboutus" className="text-warning">About Us</a></li>
              <li className="mb-2"><a href="#missionvission" className="text-warning">Our Mission and Vision</a></li>
              <li className="mb-2"><a href="#statistics" className="text-warning">Statistics</a></li>
              <li className="mb-2"><a href="#testimonal" className="text-warning">Testimonials</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h6 className="mb-3" >
              Our Courses
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-warning">Math</a></li>
              <li className="mb-2"><a href="#" className="text-warning">Science</a></li>
              <li className="mb-2"><a href="#" className="text-warning">Arts</a></li>
              <li className="mb-2"><a href="#" className="text-warning">English</a></li>
              <li className="mb-2"><a href="#" className="text-warning">Urdu</a></li>
              <li className="mb-2"><a href="#" className="text-warning">Computer Science</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h6 className="mb-3" >
              Pages
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="/" className="text-warning">Home</a></li>
              <li className="mb-2"><a href="/course" className="text-warning">Courses</a></li>
              <li className="mb-2"><a href="/faculty" className="text-warning">Faculty</a></li>
              <li className="mb-2"><a href="/contact" className="text-warning">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;