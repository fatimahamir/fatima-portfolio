
import React from "react";
import { Link } from "react-router-dom"; 
import Banner1 from "../assets/imgi_17_banner.jpg";
import Banner2 from "../assets/04-Inspiring-school-library-design-ideas-Innovative-ideas-for-K12-international-school-libraries-3.png";
import Banner3 from "../assets/satellite-portable-classroom-school.jpg";

const HeroCarousel = () => {
  return (
    <div id="heroCarousel" className="carousel slide  mt-n1  mt-0 pt-0" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Banner1}
            className="d-block w-100"
            alt="Banner 1"
          />
          <div className="carousel-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center backcolour">
            <div className="container text-center">
              <h1 className="display-4 fw-bold mb-3 text-dark">
                Your Kids Deserve The Best Education
              </h1>
              <p className="lead mb-4 text-dark">
                Active Learning, Expert Teachers & Safe Environment
              </p>
             
              <Link
                to="/admission" 
                className="btn btn-warning rounded-pill px-4 py-2 fs-6 animate-pop fw-normal"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={Banner2}
            className="d-block w-100"
            alt="Banner 2"
          />
          <div className="carousel-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center backcolour">
            <div className="container text-center">
              <h1 className="display-4 fw-bold mb-3 text-dark">
                You Can Learn Anything
              </h1>
             
              <Link
                to="/admission" 
                className="btn btn-warning rounded-pill px-4 py-2 fs-6 animate-pop fw-normal"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={Banner3}
            className="d-block w-100"
            alt="Banner 3"
          />
          <div className="carousel-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center backcolour">
            <div className="container text-center">
              <h1 className="display-4 fw-bold mb-3 text-dark">
                Building Bright Minds, Shaping Better Futures.
              </h1>
            
              <Link
                to="/admission" 
                className="btn btn-warning rounded-pill px-4 py-2 fs-6 animate-pop fw-normal"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default HeroCarousel;