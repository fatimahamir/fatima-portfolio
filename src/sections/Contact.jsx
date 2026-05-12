import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  
  // ✅ Apni Details Yahan Update Karein
  const contactInfo = {
    phone: '+923081041106',
    email: 'fatimaamir427@gmail.com',
    location: 'Lahore, Pakistan',
    locationLink: 'https://maps.google.com/?q=Lahore,Pakistan',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername'
  };

  // ✅ Form Submit Handler with Fetch API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/' + contactInfo.email, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // ✅ Success Alert
        alert('✅ Message sent successfully! I will get back to you soon.');
        form.reset();
        setFormStatus('success');
      } else {
        // ✅ Error Alert
        alert('❌ Something went wrong. Please try again or contact me directly.');
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  return (
    <section 
      id="contact" 
      className="py-3 position-relative contact-section"
      style={{ 
        backgroundColor: "rgba(2, 26, 84, 0.9)",
       
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          
          {/* ✅ LEFT SIDE - Heading & Contact Info */}
          <div className="col-lg-5">
            <h2 className="fw-bold text-white mb-4 heading-underline contact-title" style={{ fontSize: "2.5rem", lineHeight: "1.3" }}>
              Contact <span style={{ color: "#FF85BB" }}>Me</span>
            </h2>
            
            <p className="text-secondary mb-5 contact-subtitle" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
              Feel free to reach out to me for any queries or opportunities. I'm always open to discussing new projects and ideas.
            </p>

            {/* Contact Info */}
            <div className="d-flex flex-column gap-4">
              
              {/* ✅ Phone - WhatsApp Link */}
              <a 
                href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 text-decoration-none"
              >
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle contact-icon-box"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(255, 133, 187, 0.15)",
                    border: "1px solid rgba(255, 133, 187, 0.3)",
                    color: "#FF85BB",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FF85BB";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 133, 187, 0.15)";
                    e.currentTarget.style.color = "#FF85BB";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaWhatsapp />
                </div>
                <div>
                  <span className="text-secondary d-block small contact-info-label">Phone / WhatsApp</span>
                  <span className="text-white fw-semibold contact-info-value">{contactInfo.phone}</span>
                </div>
              </a>

              {/* ✅ Email - Mailto Link */}
              <a 
                href='https://mail.google.com/mail/?view=cm&to=fatimaamir427@gmail.com'
                className="d-flex align-items-center gap-3 text-decoration-none"
                target="_blank"
              >
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle contact-icon-box"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(255, 133, 187, 0.15)",
                    border: "1px solid rgba(255, 133, 187, 0.3)",
                    color: "#FF85BB",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FF85BB";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 133, 187, 0.15)";
                    e.currentTarget.style.color = "#FF85BB";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-secondary d-block small contact-info-label">Email</span>
                  <span className="text-white fw-semibold contact-info-value">{contactInfo.email}</span>
                </div>
              </a>

              {/* ✅ Location - Google Maps Link */}
              <a 
                href={contactInfo.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 text-decoration-none"
              >
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle contact-icon-box"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(255, 133, 187, 0.15)",
                    border: "1px solid rgba(255, 133, 187, 0.3)",
                    color: "#FF85BB",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#FF85BB";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 133, 187, 0.15)";
                    e.currentTarget.style.color = "#FF85BB";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="text-secondary d-block small contact-info-label">Location</span>
                  <span className="text-white fw-semibold contact-info-value">{contactInfo.location}</span>
                </div>
              </a>

            </div>
          </div>

          {/* ✅ RIGHT SIDE - Contact Form (AJAX with Alert) */}
          <div className="col-lg-7">
            <form 
              onSubmit={handleSubmit}
            >
              {/* Hidden Configuration Fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="alert alert-success mb-3" style={{ background: "rgba(40, 167, 69, 0.2)", border: "1px solid #28a745", color: "#28a745" }}>
                  ✅ Message sent successfully!
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="alert alert-danger mb-3" style={{ background: "rgba(220, 53, 69, 0.2)", border: "1px solid #dc3545", color: "#dc3545" }}>
                  ❌ Something went wrong. Please try again.
                </div>
              )}
              
              {/* ✅ Name & Email Row */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control contact-input"
                    required
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      padding: "14px 18px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.background = "rgba(255, 133, 187, 0.1)";
                      e.target.style.borderColor = "#FF85BB";
                    }}
                    onBlur={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.05)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control contact-input"
                    required
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      padding: "14px 18px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.background = "rgba(255, 133, 187, 0.1)";
                      e.target.style.borderColor = "#FF85BB";
                    }}
                    onBlur={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.05)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>
              </div>

              {/* ✅ Subject Input */}
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-control contact-input"
                  required
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255, 133, 187, 0.1)";
                    e.target.style.borderColor = "#FF85BB";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  }}
                />
              </div>

              {/* ✅ Phone Input */}
              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-control contact-input"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255, 133, 187, 0.1)";
                    e.target.style.borderColor = "#FF85BB";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  }}
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="form-control contact-input"
                  required
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    resize: "none",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255, 133, 187, 0.1)";
                    e.target.style.borderColor = "#FF85BB";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn rounded-pill px-5 py-3 fw-semibold d-flex align-items-center gap-2 contact-submit-btn"
                style={{
                  background: "#FF85BB",
                  color: "#021A54",
                  fontSize: "1rem",
                  border: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e06ea0";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 133, 187, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FF85BB";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaPaperPlane /> Send Message
              </button>

              {/* ✅ Connect With Me - Social Icons */}
              <div className="text-center mt-4">
                <p className="text-secondary mb-3 small text-uppercase contact-social-label" style={{ letterSpacing: "1px" }}>
                  Connect with me
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  
                  {/* Email Icon */}
                  <a
                    href= 'https://mail.google.com/mail/?view=cm&to=fatimaamir427@gmail.com'
                    target="_blank"
                    className="d-flex align-items-center justify-content-center rounded-circle contact-social-icon"
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#F5F5F5",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FF85BB";
                      e.currentTarget.style.borderColor = "#FF85BB";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "#F5F5F5";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FaEnvelope />
                  </a>

                  {/* LinkedIn Icon */}
                  <a
                    href= 'https://www.linkedin.com/in/fatima-amir-880595320'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle contact-social-icon"
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#F5F5F5",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FF85BB";
                      e.currentTarget.style.borderColor = "#FF85BB";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "#F5F5F5";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FaLinkedinIn />
                  </a>

                  {/* GitHub Icon */}
                  <a
                    href='https://github.com/fatimahamir'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle contact-social-icon"
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#F5F5F5",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FF85BB";
                      e.currentTarget.style.borderColor = "#FF85BB";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "#F5F5F5";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FaGithub />
                  </a>

                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;