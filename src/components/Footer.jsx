import React, { useState, useEffect } from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram, FaArrowUp, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="py-4" style={{ backgroundColor: "rgba(2, 26, 84, 1)" }}>
        <div className="container">
          
          {/* Logo */}
          <div className="text-center mb-3">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}
            style={{
      fontFamily: "'poppins', sans-serif", 
      fontSize: "1.8rem",
      fontWeight: "500",
      color: "#FF85BB",
      textDecoration: "none",
      letterSpacing: "1px"
    }}>fa<span className='text-light'>tima.</span></a>
          </div>

          {/* Copyright Text */}
          <p className="text-center text-secondary mb-3" style={{ fontSize: "0.9rem" }}>
            Designed and Developed by <span style={{ color: "#FF85BB" }}>Fatima Amir</span> with 
            <span style={{ color: "#FF85BB" }}> Love</span> |
            <span style={{ color: "#FF85BB" }}> © 2026</span>
          </p>

          {/* Social Icons */}
          <div className="d-flex gap-3 justify-content-center">
            {[
              
              { icon: FaGithub, href: "https://github.com/fatimahamir" },
              { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/fatima-amir-880595320" },
              { icon: FaWhatsapp, href: "https://wa.me/923081041106" }  // ✅ Fixed WhatsApp link
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "38px",
                  height: "38px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#F5F5F5",
                  fontSize: "0.95rem",
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
                <social.icon />
              </a>
            ))}
          </div>

        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`position-fixed rounded-circle d-flex align-items-center justify-content-center ${visible ? 'd-flex' : 'd-none'}`}
        style={{
          bottom: "30px",
          right: "30px",
          zIndex: 9999,
          width: "48px",
          height: "48px",
          background: "#FF85BB",
          color: "#fff",
          border: "none",
          fontSize: "1.2rem",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(255, 133, 187, 0.4)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 133, 187, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 133, 187, 0.4)";
        }}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;