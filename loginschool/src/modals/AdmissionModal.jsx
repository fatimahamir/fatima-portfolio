
import React from 'react';
import { Link } from "react-router-dom";

import image from'../assets/imgi_9_academics.jpg';

const AdmissionModal = () => {
  return (
    <div className="modal fade" id="admissionModal" tabIndex="-1" aria-labelledby="admissionModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 rounded-4 shadow-lg">
          <div className="position-relative">
            <img 
              src={image}
              className="img-fluid rounded-top" 
              alt="Students in Classroom" 
            />
          </div>
          <div className="modal-body p-4">
            <h4 className="fw-bold text-primary mb-3">ADMISSIONS OPEN FOR 2025</h4>
            <p className="mb-4">
              JOS School is now accepting applications for the upcoming academic year. We welcome motivated learners from all backgrounds to join our vibrant community of students, educators, and lifelong learners.
            </p>
            <div className="d-grid">
             <Link to="/admission" className="btn btn-warning btn-lg">
  Apply Now
</Link>
            </div>
          </div>
          <div className="modal-footer border-0 pb-4 px-4">
            <small className="text-muted">www.josschool.edu</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;