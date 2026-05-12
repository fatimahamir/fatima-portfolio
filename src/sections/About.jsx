import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaCode, FaUsers, FaAward, FaRocket, FaCheckCircle, FaCalendarAlt, FaStar, FaTrophy } from 'react-icons/fa';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('education');

  const stats = [
    { value: '8+', label: 'Web Projects' },
    { value: '2', label: 'Internships Completed' },
    { value: '10+', label: 'Github Repos' },
    { value: '24/7', label: 'Availability' }
  ];

  return (
    <section id="about-me" className="position-relative py-5 about-section" style={{ backgroundColor: "#021A54" }}>
      <div className="container py-5">
        <div className="row g-5 align-items-start">

          {/* Left Side - Text Content */}
          <div className="col-12 col-lg-7">
            <h6 className="text-uppercase fw-semibold mb-3 about-subtitle" style={{ color: "#FF85BB", letterSpacing: "2px", fontSize: "0.9rem" }}>
              ✦ Discover ✦
            </h6>

            <h2 className="fw-bold mb-4 heading-underline about-title" style={{ 
              color: "var(--text-primary, #ffffff)", 
              fontSize: "clamp(1.8rem, 5vw, 2.2rem)", 
              lineHeight: "1.3" 
            }}>
              About <span style={{ color: "#FF85BB" }}>Me</span>
            </h2>

            <p className="mb-3 about-text" style={{ 
              color: "var(--text-secondary, rgba(255,255,255,0.7))",
              lineHeight: "1.8", 
              fontSize: "clamp(0.9rem, 3vw, 1rem)" 
            }}> 
              I am a dedicated <strong style={{ color: "var(--text-primary, #ffffff)" }}>Computer Science Student</strong> & <strong style={{ color: "var(--text-primary, #ffffff)" }}>MERN Stack Developer</strong> based in Lahore, Pakistan. I enjoy building responsive, user-friendly, and visually appealing web applications that combine clean design with real-world functionality.
            </p>

            <p className="mb-3 about-text" style={{ 
              color: "var(--text-secondary, rgba(255,255,255,0.7))",
              lineHeight: "1.8", 
              fontSize: "clamp(0.9rem, 3vw, 1rem)" 
            }}>
              Through <strong style={{ color: "var(--text-primary, #ffffff)" }}>academic</strong> and <strong style={{ color: "var(--text-primary, #ffffff)" }}>Personal Projects</strong> I've gained hands-on experience in full-stack development. I'm a continuous learner, always exploring new technologies and My goal is to create impactful solutions while growing my career in freelancing and the tech industry.
            </p>

            <p className="mb-4 about-text" style={{ 
              color: "var(--text-secondary, rgba(255,255,255,0.7))",
              lineHeight: "1.8", 
              fontSize: "clamp(0.9rem, 3vw, 1rem)" 
            }}>
              With <strong style={{ color: "var(--text-primary, #ffffff)" }}>1.5 years</strong> of experience in web development, I have acquired the skills and knowledge necessary to make your project a success. I love turning complex problems into simple, beautiful designs.
            </p>

            {/* Stats with Pipe Separator - Responsive */}
            <div className="stats-container mb-4">
              <div className="d-flex flex-wrap justify-content-start align-items-center gap-3 gap-md-4">
                {stats.map((stat, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className="stat-item text-center"
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        minWidth: "70px"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        const value = e.currentTarget.querySelector('.stat-value');
                        if (value) value.style.color = "#FF85BB";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        const value = e.currentTarget.querySelector('.stat-value');
                        if (value) value.style.color = "var(--text-primary, #fff)";
                      }}
                    >
                      <h3 className="stat-value fw-bold mb-0" style={{ 
                        color: "var(--text-primary, #ffffff)",
                        fontSize: "clamp(1.2rem, 4vw, 1.5rem)", 
                        transition: "0.3s" 
                      }}>{stat.value}</h3>
                      <p className="mb-0" style={{ 
                        color: "var(--text-secondary, rgba(255,255,255,0.7))",
                        fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)" 
                      }}>{stat.label}</p>
                    </div>
                    {idx < stats.length - 1 && (
                      <span style={{ color: "#FF85BB", fontSize: "clamp(0.8rem, 3vw, 1.2rem)", opacity: 0.5 }}>|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="text-start">
              <a
                href="/cv.pdf"
                download
                className="btn rounded-pill px-4 px-md-5 py-2 fw-semibold about-cv-btn"
                style={{
                  backgroundColor: "#FF85BB",
                  color: "#021A54",
                  letterSpacing: "1px",
                  transition: "all 0.3s",
                  border: "2px solid #FF85BB",
                  fontSize: "clamp(0.8rem, 3vw, 0.9rem)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#FF85BB";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 5px 15px rgba(255, 133, 187, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF85BB";
                  e.target.style.color = "#021A54";
                  e.target.style.transform = "";
                  e.target.style.boxShadow = "";
                }}
              >
                View CV
              </a>
            </div>
          </div>

          {/* Right Side - Services Card */}
          <div className="col-12 col-lg-5">
            <div
              className="info-card p-3 p-md-4 rounded-4 about-card"
              style={{
                background: "var(--bg-card, rgba(255,255,255,0.03))",
                border: "1px solid var(--border-card, rgba(255,255,255,0.05))",
                backdropFilter: "blur(10px)",
                boxShadow: "var(--card-shadow, 0 10px 40px rgba(0, 0, 0, 0.3))",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--card-shadow, 0 10px 40px rgba(0, 0, 0, 0.3))";
              }}
            >
              <h4 className="fw-bold mb-4 pb-3" style={{ 
                color: "var(--text-primary, #ffffff)",
                borderBottom: "2px solid rgba(255, 133, 187, 0.3)" 
              }}>
                <FaLaptopCode className="me-2" style={{ color: "#fcfcfc" }} /> Services
              </h4>
              
              <div className="row g-3">
                {[
                  { icon: '🌐', title: 'Web Development', desc: 'Custom responsive websites & web apps', color: '#FF85BB' },
                  { icon: '📱', title: 'Frontend Dev', desc: 'Reactjs and Bootstrap', color: '#61DAFB' },
                  { icon: '🗄️', title: 'Database Design', desc: 'MongoDB, Mongodb Atlas', color: '#4DB33D' },
                  { icon: '💼', title: 'Freelance', desc: 'End-to-end project delivery', color: '#9C27B0' }
                ].map((service, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="p-3 rounded-3 h-100" style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,133,187,0.1)",
                      borderRadius: "16px",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, rgba(255,133,187,0.1), rgba(255,133,187,0.05))`;
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = service.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(255,133,187,0.1)";
                    }}>
                      <span style={{ fontSize: "2rem", display: "block", marginBottom: "8px" }}>{service.icon}</span>
                      <h6 className="mb-1" style={{ 
                        color: "var(--text-primary, #ffffff)", 
                        fontSize: "0.95rem", 
                        fontWeight: "700" 
                      }}>{service.title}</h6>
                      <p className="mb-0" style={{ 
                        color: "var(--text-secondary, rgba(255,255,255,0.6))", 
                        fontSize: "0.75rem",
                        lineHeight: "1.4"
                      }}>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Open for Work Badge - Subtle Scan Animation */}
              <div className="d-flex justify-content-center mt-4 pt-2">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill position-relative overflow-hidden" style={{
                  background: "linear-gradient(135deg, #FF85BB, #e06ea0)",
                  boxShadow: "0 2px 8px rgba(255,133,187,0.2)"
                }}>
                  <div className="scan-effect" style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "50%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    animation: "scan 3s ease-in-out infinite"
                  }}></div>
                  
                  <span style={{ 
                    width: "8px", 
                    height: "8px", 
                    backgroundColor: "#4CAF50", 
                    borderRadius: "50%", 
                    display: "inline-block"
                  }}></span>
                  <span className="fw-semibold position-relative" style={{ color: "#ffffff", fontSize: "0.7rem", letterSpacing: "1px" }}>OPEN FOR WORK</span>
                </div>
              </div>

              {/* Decorative Bottom */}
              <div className="mt-3 pt-2 text-center" style={{ borderTop: "1px solid rgba(255, 133, 187, 0.2)" }}>
                <span className="small" style={{ 
                  color: "var(--text-secondary, rgba(255,255,255,0.7))",
                  fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)" 
                }}>
                  Available for freelance & full-time opportunities
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,133,187,0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255,133,187,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,133,187,0); }
        }
        
        @keyframes scan {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        
        @keyframes softPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        @keyframes softGlow {
          0% { box-shadow: 0 0 0 0 rgba(255,133,187,0.4); }
          50% { box-shadow: 0 0 0 3px rgba(255,133,187,0.2); }
          100% { box-shadow: 0 0 0 0 rgba(255,133,187,0.4); }
        }
        
        .stat-item {
          transition: all 0.3s ease;
        }
        
        .info-card {
          transition: all 0.3s ease;
        }
        
        /* Responsive Fixes */
        @media (max-width: 991px) {
          /* Left side - keep left alignment */
          .about-subtitle,
          .about-title,
          .about-text,
          .stats-container,
          .text-start {
            text-align: left !important;
          }
          
          /* Stats container keep left */
          .stats-container .d-flex {
            justify-content: flex-start !important;
          }
        }
        
        @media (max-width: 768px) {
          /* Services - 2 columns maintain karo */
          .row.g-3 {
            display: flex;
            flex-wrap: wrap;
          }
          
          .col-md-6 {
            flex: 0 0 auto;
            width: 50%;
          }
        }
        
        @media (max-width: 576px) {
          /* Mobile par bhi 2 columns rakhna hai */
          .col-md-6 {
            flex: 0 0 auto;
            width: 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;