import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ✅ Theme Toggle State
  const [isDarkMode, setIsDarkMode] = useState(true);

  // ✅ Theme apply karne ka function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  // ✅ Initial theme load karna
  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT ME', id: 'about-me' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveLink(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container-fluid">
        
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}
            style={{
              fontFamily: "'Poppins', sans-serif", 
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#FF85BB",
              textDecoration: "none",
              letterSpacing: "1px"
            }}>
            fa<span className='text-light'>tima.</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeLink === link.id ? 'active' : ''}
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
          
          {/* ✅ Mobile: Hire Me → Contact Section */}
          <li className="nav-hire-item mobile-only d-lg-none">
            <a 
              href="#contact"
              className="hire-me-btn"
              onClick={(e) => {
                scrollToSection(e, 'contact');
                setActiveLink('contact');
              }}
            >
              Hire Me
            </a>
          </li>

          {/* ✅ Mobile: Theme Toggle Button (Menu ke andar) */}
          <li className="nav-theme-item mobile-only d-lg-none mt-3 pt-3 border-top border-secondary border-opacity-25">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn w-100 d-flex align-items-center justify-content-center gap-2"
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#F5F5F5",
                padding: "0.6rem 1rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>

        {/* Right Side */}
        <div className="navbar-right-group">
          
          {/* Social Icons */}
          <div className="social-icons desktop-only">
            <a href="https://github.com/fatimahamir" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/fatima-amir-880595320" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=fatimaamir427@gmail.com" target="_blank">
  <FaEnvelope />
</a>

            {/* ✅ Desktop: Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn desktop-only"
              aria-label="Toggle theme"
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#F5F5F5",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 133, 187, 0.2)";
                e.currentTarget.style.borderColor = "#FF85BB";
                e.currentTarget.style.color = "#FF85BB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.color = "#F5F5F5";
              }}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* ✅ Desktop: Hire Me → Contact Section */}
            <a 
              href="#contact"
              className="hire-me-btn mx-1 desktop-only"
              onClick={(e) => {
                scrollToSection(e, 'contact');
                setActiveLink('contact');
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle me-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;