
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AdmissionModal from '../modals/AdmissionModal';
import image from'../assets/imgi_14_academic-progrem-1.jpg';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      consent: false
    });
  };

  return (
    <>
    
      
      <section className="py-5 mt-5">
        <div className="container mt-4">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6 d-flex flex-column">
              <h2 className="fw-bold text-dark mb-4">Get In Touch</h2>
              <p className="text-muted mb-4">
                Have questions about admissions, courses, or campus life? Reach out to us — we'd love to hear from you!
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-map-marker-alt text-warning fs-4 mt-1 me-3"></i>
                <div>
                  <h6 className="fw-bold">Address</h6>
                  <p className="mb-0">123 Heran Road Lahore</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-phone-alt text-warning fs-4 mt-1 me-3"></i>
                <div>
                  <h6 className="fw-bold">Phone</h6>
                  <p className="mb-0">(308) 427-21324</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="fas fa-envelope text-warning fs-4 mt-1 me-3"></i>
                <div>
                  <h6 className="fw-bold">Email</h6>
                  <p className="mb-0">info@josschool.edu</p>
                </div>
              </div>

              <div className="mt-auto">
                <img 
                  src={image} 
                  alt="JOS School Campus"
                  className="img-fluid rounded shadow-sm w-100" 
                  style={{ objectFit: 'cover', maxHeight: '300px' }} 
                />
              </div>
            </div>

            <div className="col-lg-6 d-flex flex-column">
              <form onSubmit={handleSubmit} className="h-100 d-flex flex-column">
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="contactName" className="form-label">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="contactName" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactEmail" className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="contactEmail" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <select 
                    className="form-select" 
                    id="contactSubject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="faculty">Faculty/Staff</option>
                    <option value="events">School Events</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="contactMessage" className="form-label">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea 
                    className="form-control" 
                    id="contactMessage" 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="form-check mb-4">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="contactConsent" 
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required 
                  />
                  <label className="form-check-label" htmlFor="contactConsent">
                    I agree to receive communications from JOS School.
                  </label>
                </div>

                <div className="mt-auto">
                  <button type="submit" className="btn btn-warning btn-lg px-5 fw-bold w-100">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 JOS School. All rights reserved.</p>
        </div>
      </footer>

      <AdmissionModal />
    </>
  );
};

export default Contact;