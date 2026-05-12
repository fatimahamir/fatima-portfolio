
import React from 'react';
import Image from '../assets/imgi_2_img1.jpg'; 

const AboutUs = () => {
  return (
    <section id="aboutus" className="container-fluid my-5 py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <img src={Image} className="img-fluid rounded" alt="Happy Students" />
            <div className="card mt-4 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">We’re here to help!</h5>
                <p className="card-text text-muted small">
                  For general inquiries, admissions information, or to schedule a
                  campus visit, please reach out using the contact details below or
                  fill out our online form. Our team will respond as soon as
                  possible.
                </p>
                <p className="mb-0">
                  <i className="fas fa-phone text-warning me-2"></i>
                  <strong>+92 30842721324</strong>
                </p>
                <p className="mb-0">
                  <i className="fa-solid fa-envelope text-warning me-2"></i>
                  <strong>info@jinnahofficersschool.edu</strong>
                </p>
              </div>
            </div>
          </div>

         
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold">We Are The Best Choice For Your Child</h1>
            <p className="text-muted mt-3">
              Welcome to <strong>Jinnah Officers School</strong>, a nurturing
              environment where curiosity is ignited, talents are discovered, and
              futures are shaped. Since our founding in 2003, we have been
              committed to academic excellence, character development, and holistic
              growth.
            </p>
            <p className="text-muted mt-3">
              Our dedicated team of educators fosters a dynamic learning atmosphere
              that encourages critical thinking, creativity, and collaboration.
              With a strong emphasis on values, innovation, and community, we
              prepare students not just for academic success—but for life beyond
              the classroom.
            </p>
            <p className="text-muted mt-3">
              At JOS, every student is seen, supported, and inspired to reach their
              fullest potential.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-2">
                <i className="fas fa-check-circle text-warning me-2"></i>
                Special Education
              </li>
              <li className="mb-2">
                <i className="fas fa-check-circle text-warning me-2"></i>
                Access more than 100K online courses
              </li>
              <li className="mb-2">
                <i className="fas fa-check-circle text-warning me-2"></i>
                Traditional Academies
              </li>
            </ul>
            <a href="#" className="btn btn-warning fw-bold px-4 mt-3">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;