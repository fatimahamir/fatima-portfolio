import React, { useState } from 'react';
import AdmissionBg from '../assets/imgi_9_academics.jpg';
import image from '../assets/Summer-Cotton-Student-New-School-Uniform-Suit.avif'

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    fatherName: '',
    motherName: '',
    phone: '',
    grade: '',
    address: '',
    documents: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      documents: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingApplications = JSON.parse(localStorage.getItem('studentApplications') || '[]');
    
    const newApplication = {
      id: Date.now(),
      ...formData,
      status: 'Applied',
      dateApplied: new Date().toISOString().split('T')[0],
      timestamp: new Date().toISOString()
    };
    
    const updatedApplications = [...existingApplications, newApplication];
    
    localStorage.setItem('studentApplications', JSON.stringify(updatedApplications));
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        dob: '',
        gender: '',
        fatherName: '',
        motherName: '',
        phone: '',
        grade: '',
        address: '',
        documents: null
      });
      if (document.getElementById('documents')) {
        document.getElementById('documents').value = '';
      }
    }, 3000);
  };

  return (
    <main className="pt-5" style={{ backgroundColor: 'white' }}>
      <section
        className="admission-banner text-dark"
        style={{
          backgroundImage: `url(${AdmissionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '80px 0',
          borderRadius: '12px'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3 text-light">Admission Form</h1>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: 'white' }}>
        <div className="container">
          {isSubmitted && (
            <div className="alert alert-success text-center">
              <h4 className="mb-3">Thank you for applying!</h4>
              <p className="mb-0">
                Your application has been submitted successfully. You will receive further information via email.
              </p>
            </div>
          )}

          <div id="admissionForm" className="admission-container my-4">
            <div className="row g-4 align-items-stretch">

              <div className="col-lg-6 d-flex flex-column">
                <h3 className="fw-bold text-dark">Apply Now</h3>
                <p className="text-muted mb-4 lead">
                  Fill out the form to apply for admission. <br /> All fields are required.
                  Start your child's educational journey with us today!
                </p>
                <div>
                  <img
                    src={image}
                    alt="Students"
                    className="img-fluid rounded shadow-sm w-100"
                    style={{ objectFit: "cover", maxHeight: "400px" }}
                  />
                </div>
              </div>

              <div className="col-lg-6 d-flex flex-column">
                <form onSubmit={handleSubmit} className="h-100 d-flex flex-column">

                  <div className="mb-3">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Date of Birth *</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Gender *</label>
                      <select 
                        className="form-select" 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Father's Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Mother's Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Parent Phone *</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Grade Applying For *</label>
                      <select 
                        className="form-select" 
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Grade</option>
                        <option value="pre-school">Pre School</option>
                        <option value="class-1-5">Class 1–5</option>
                        <option value="class-6-8">Class 6–8</option>
                        <option value="class-9-10">Class 9–10</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Full Address *</label>
                    <textarea 
                      className="form-control" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="2" 
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Upload Documents (B-Form)</label>
                    <input 
                      type="file" 
                      className="form-control" 
                      id="documents"
                      onChange={handleFileChange}
                      accept=".png,.jpg,.jpeg,.pdf"
                    />
                    <small className="text-muted">PNG, JPG, PDF</small>
                  </div>

                  <div className="mt-auto text-center pt-2">
                    <button type="submit" className="btn btn-warning btn-lg px-5 fw-bold">
                      Submit Application
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
