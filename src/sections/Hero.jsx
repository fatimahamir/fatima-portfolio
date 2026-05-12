import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from '../assets/uni.png';


const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullTexts = [
    "Computer Science Student ",
    "Website Developer ",
  ];

  const cvFile = '/resume.pdf';

  // Typing animation with rotation
  useEffect(() => {
    const currentText = fullTexts[textIndex];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % fullTexts.length);
        }
      }, 100);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length + 1));
        if (typedText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 150);
    }
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  // Cursor blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="d-flex align-items-center min-vh-100"
      style={{ backgroundColor: "rgba(2, 26, 84, 0.6)" }}
    >
      <div className="container py-5">
        <div className="row align-items-center g-4 justify-content-center">
          
          {/* Left Side: Text Content */}
          <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start ps-4">
            
            {/* Hey It's Me - Badge */}
            <div className="mb-3 d-flex justify-content-center justify-content-lg-start">
              <span className="d-inline-block px-3 py-1 rounded-pill" 
                    style={{ 
                      background: "linear-gradient(135deg, rgba(255,133,187,0.2), rgba(255,133,187,0.05))",
                      color: "#ffffff",
                      fontSize: "0.8rem",
                      letterSpacing: "1px",
                      borderLeft: "3px solid #021A54"
                    }}>
               <span>👋 HEY! IT'S ME</span>
              </span>
            </div>

            {/* Name */}
            <div className="mb-3">
              <h1 className="fw-bold text-white mb-2 fs-1 fs-md-1" 
                  style={{ 
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    letterSpacing: "2px"
                  }}>
                FATIMA AMIR
              </h1>
              <div className="w-50 h-1 bg-gradient mx-auto mx-lg-0" 
                   style={{ 
                     background: "linear-gradient(90deg, #FF85BB, transparent)",
                     height: "3px",
                     width: "80px"
                   }}>
              </div>
            </div>
            
            {/* Animated Text */}
            <div className="mb-4">
              <span className="badge px-4 py-2" 
                    style={{ 
                      backgroundColor: "rgba(255, 133, 187, 0.15)", 
                      color: "#FF85BB", 
                      fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
                      letterSpacing: "1px",
                      borderRadius: "50px",
                      backdropFilter: "blur(10px)"
                    }}>
                 {typedText}
                <span
                  style={{
                    borderRight: `2px solid ${showCursor ? "#FF85BB" : "transparent"}`,
                    marginLeft: "4px",
                    opacity: showCursor ? 1 : 0
                  }}
                />
              </span>
            </div>
            
            {/* Bio */}
            <div className="d-flex justify-content-center justify-content-lg-start">
              <p className="text-white-50 mb-4 text-center text-lg-start" 
                 style={{ 
                   fontSize: "clamp(0.9rem, 2.5vw, 1rem)", 
                   maxWidth: "580px",
                   lineHeight: "1.6"
                 }}>
                Exploring the world of technology through code and Building sleek, responsive web apps with clean UI, 
                smooth UX & real-world functionality. Committed to continuous learning and delivering high-quality solutions
              </p>
            </div>
            
              {/* Open to Work | Available for Freelance */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 ">
              
              {/* Open to Work */}
              <div className="d-flex align-items-center gap-2">
                <span style={{ 
                  width: "8px", 
                  height: "8px", 
                  backgroundColor: "#4CAF50", 
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}></span>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", fontWeight: "500" }}>OPEN TO WORK</span>
              </div>
              
              {/* Divider */}
              <span style={{ color: "rgb(255, 255, 255)" }}>|</span>
              
              {/* Available for Freelance */}
              <div className="d-flex align-items-center gap-2">
                <span>💻</span>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", fontWeight: "500" }}>AVAILABLE FOR FREELANCE</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap my-4">
              <a
                href="#projects"
                className="btn rounded-pill px-4 py-2 fw-semibold"
                style={{
                  backgroundColor: "#FF85BB",
                  color: "#021A54",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  fontWeight: "600"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e06ea0";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 5px 15px rgba(255, 133, 187, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF85BB";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                VIEW PROJECTS
              </a>

              <a
                 href="/resume.pdf"
                download="Fatima Amir Resume.pdf"
                className="btn rounded-pill px-4 py-2 fw-semibold"
                style={{
                  color: "#FF85BB",
                  border: "2px solid #FF85BB",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontWeight: "600"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF85BB";
                  e.currentTarget.style.color = "#021A54";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 133, 187, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#FF85BB";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                DOWNLOAD CV
              </a>
            </div>
            
          

       {/* Let's Connect - with Icons */}
<div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2 mt-3">
  <span style={{ fontSize: "0.9rem" }}>🔗</span>
  <span  className= "me-4" style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: "600" }}>Let's Connect:</span>
  
  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/fatima-amir-880595320" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "34px",
      height: "34px",
      border: "1px solid #fff",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      backgroundColor: "transparent"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#fff";
      e.currentTarget.querySelector('svg').style.color = "#021A54";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.querySelector('svg').style.color = "#fff";
    }}
  >
    <FaLinkedin style={{ color: "#fff", fontSize: "18px", transition: "0.3s" }} />
  </a>

  {/* GitHub */}
  <a 
    href="https://github.com/fatimahamir" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "34px",
      height: "34px",
      border: "1px solid #fff",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      backgroundColor: "transparent"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#fff";
      e.currentTarget.querySelector('svg').style.color = "#021A54";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.querySelector('svg').style.color = "#fff";
    }}
  >
    <FaGithub style={{ color: "#fff", fontSize: "18px", transition: "0.3s" }} />
  </a>

  {/* Email */}
  <a 
    href="https://mail.google.com/mail/?view=cm&to=fatimaamir427@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "34px",
      height: "34px",
      border: "1px solid #fff",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      backgroundColor: "transparent"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#fff";
      e.currentTarget.querySelector('svg').style.color = "#021A54";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.querySelector('svg').style.color = "#fff";
    }}
  >
    <FaEnvelope style={{ color: "#fff", fontSize: "18px", transition: "0.3s" }} />
  </a>
</div>
          </div>

          {/* Right Side: Image */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mt-5 mb-lg-0 text-center">
            <div 
              className="position-relative d-inline-block image-container"
              style={{ maxWidth: "344px", width: "100%", margin: "0 auto" }}
            >
              <div 
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: "34px",
                  bottom: "-8px",
                  left: "-8px",
                  right: "34px",
                  backgroundColor: "#FF85BB",
                  borderRadius: "40px 40px 40px 30px",
                  transition: "all 0.3s ease"
                }}
              ></div>
              <div 
                style={{
                  position: "absolute",
                  zIndex: 0,
                  top: "-8px",
                  bottom: "24px",
                  left: "24px",
                  right: "-8px",
                  backgroundColor: "#FF85BB", 
                  borderRadius: "40px 40px 40px 30px",
                  transition: "all 0.3s ease"
                }}
              ></div>
              <img 
                src={profileImg} 
                alt="Fatima Amir"
                className="img-fluid"
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "block",
                  borderRadius: "40px 30px 40px 30px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .image-container {
          transition: all 0.3s ease;
        }

        .image-container:hover > div:first-child {
          transform: translate(5px, 5px);
        }

        /* Desktop - Large Screens */
        @media (min-width: 992px) {
          .image-container { max-width: 344px; }
        }

        /* Tablet - Medium Screens */
        @media (min-width: 768px) and (max-width: 991px) {
          .image-container { max-width: 320px !important; margin-top: 20px !important; }
          .image-container img { border-radius: 25px; }
          .col-lg-6 { text-align: center !important; }
          .mx-lg-0 { margin-left: auto !important; margin-right: auto !important; }
        }

        /* Mobile - Small Screens */
        @media (max-width: 767px) {
          .image-container { max-width: 270px !important; margin-top: 20px !important; }
          
          /* Center Hey It's Me on mobile */
          .d-flex.justify-content-center.justify-content-lg-start {
            justify-content: center !important;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 480px) {
          .image-container { max-width: 240px !important; margin-top: 30px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;