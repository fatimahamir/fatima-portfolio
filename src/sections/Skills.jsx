import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaServer, FaTools, FaLanguage, FaStar, FaRocket, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// ✅ Apni images import karein
import htmlImg from '../assets/html5.jpg';
import cssImg from '../assets/css.png';
import jsImg from '../assets/js.png';
import bootstrapImg from '../assets/bootstrap.png';
import reactImg from '../assets/react2.png';
import nodeImg from '../assets/node1.png';
import express from '../assets/ex.png';
import mongodbImg from '../assets/mongo1.png';
import gitImg from '../assets/git.png';
import githubImg from '../assets/github.webp';
import vscode from '../assets/vscode2.jpg';
import pythonImg from '../assets/python.jpg';
import cppImg from '../assets/cplus.png';
import vercel from '../assets/vercel.png';
import vite from '../assets/vite.jpg';
import railway from '../assets/railway.png';
import api from '../assets/api.jpg';
import atlas from '../assets/atlas.png';
import tailwind from '../assets/tailwind.jpg';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    {
      title: 'Frontend',
      icon: <FaCode />,
      accent: '#FF85BB',
      skills: [
        { img: reactImg, name: 'React', level: 84, color: '#61DAFB' },
        { img: htmlImg, name: 'HTML5', level: 95, color: '#E44D26' },
        { img: cssImg, name: 'CSS3', level: 90, color: '#264DE4' },
        { img: jsImg, name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { img: bootstrapImg, name: 'Bootstrap', level: 95, color: '#7952B3' },
        { img: vite, name: 'Vite', level: 80, color: '#646CFF' },
        { img: tailwind, name: 'Tailwind', level: 85, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      accent: '#00D4AA',
      skills: [
        { img: nodeImg, name: 'Node.js', level: 80, color: '#339933' },
        { img: mongodbImg, name: 'MongoDB', level: 88, color: '#47A248' },
        { img: express, name: 'Express', level: 80, color: '#000000' },
        { img: jsImg, name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { img: api, name: 'REST API', level: 85, color: '#FF6B6B' },
        { img: atlas, name: 'Atlas', level: 80, color: '#00D4AA' },
      ]
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      accent: '#3498DB',
      skills: [
        { img: gitImg, name: 'Git', level: 85, color: '#F05032' },
        { img: githubImg, name: 'GitHub', level: 83, color: '#ffffff' },
        { img: vscode, name: 'VS Code', level: 90, color: '#007ACC' },
        { img: vercel, name: 'Vercel', level: 80, color: '#000000' },
        { img: railway, name: 'Railway', level: 75, color: '#0B0D0E' },
      ]
    },
    {
      title: 'Languages',
      icon: <FaLanguage />,
      accent: '#f6f4e9',
      skills: [
        { img: jsImg, name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { img: pythonImg, name: 'Python', level: 75, color: '#3776AB' },
        { img: cppImg, name: 'C++', level: 70, color: '#00599C' },
      ]
    },
  ];

  const activeCat = categories[activeCategory];

  const goToPrevious = () => {
    setActiveCategory((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveCategory((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="skills" className="py-5 position-relative overflow-hidden skills-section" style={{ background: '#021A54', minHeight: '100vh' }}>
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="position-absolute rounded-circle" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,133,187,0.08) 0%, transparent 70%)', top: '-100px', right: '-100px', animation: 'float 25s infinite ease-in-out' }} />
        <div className="position-absolute rounded-circle" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,255,163,0.08) 0%, transparent 70%)', bottom: '-50px', left: '-100px', animation: 'float 18s infinite ease-in-out reverse' }} />
      </div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="mb-5">
          <span className="small d-inline-block px-3 py-1 rounded-pill mb-3" style={{ color: '#FF85BB', letterSpacing: '2px' }}>✦ MY EXPERTISE ✦</span>
          <h1 className="fw-bold mb-3 fs-1 skills-title" style={{ color: '#ffffff' }}>
            Technical <span style={{ color: '#FF85BB' }}>Skills</span>
          </h1>
          <p className="skills-subtitle" style={{ maxWidth: '550px', color: '#94a3b8', fontSize: '1rem' }}>
            Technologies and tools I've mastered to bring ideas to life
          </p>
        </div>

        {/* Category Pills */}
        <div className="mb-4">
          <div className="pills-container d-inline-flex flex-wrap gap-2" style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '6px',
            borderRadius: '60px',
            border: '1px solid rgba(255,255,255,0.08)',
            width: 'auto'
          }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className="nav-pill px-4 py-2 border-0 rounded-pill fw-semibold d-flex align-items-center gap-2"
                style={{
                  background: activeCategory === idx ? cat.accent : 'transparent',
                  color: activeCategory === idx ? '#021A54' : '#e2e8f0',
                  transition: 'all 0.3s ease',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  boxShadow: activeCategory === idx ? `0 4px 15px ${cat.accent}50` : 'none'
                }}
                onMouseEnter={(e) => {
                  if(activeCategory !== idx) e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  if(activeCategory !== idx) e.currentTarget.style.background = 'transparent';
                }}
              >
                <span style={{ fontSize: '1rem' }}>{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <Row className="mt-3">
          <Col lg={12}>
            <div className="skills-card p-4 p-lg-5 rounded-4" style={{
              background: `linear-gradient(135deg, ${activeCat.accent}10, rgba(255,255,255,0.02))`,
              backdropFilter: 'blur(10px)',
              borderRadius: '28px',
              border: `1px solid ${activeCat.accent}30`,
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: `0 20px 40px rgba(0,0,0,0.3)`
            }}>
              
              {/* ALL SCREENS: Arrows at Left and Right Ends */}
              <div className="d-flex align-items-center justify-content-center gap-3">
                {/* Left Arrow - Start */}
                <button
                  onClick={goToPrevious}
                  className="nav-arrow d-flex align-items-center justify-content-center border-0 rounded-circle flex-shrink-0"
                  style={{
                    width: '42px',
                    height: '42px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = activeCat.accent;
                    e.currentTarget.style.color = '#021A54';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  <FaChevronLeft />
                </button>

                {/* Skills Area */}
                <div className="flex-grow-1">
                  {/* LARGE SCREENS (≥1400px): Single Horizontal Row */}
                  <div className="d-none d-xxl-flex gap-3 overflow-x-auto justify-content-center" style={{ 
                    scrollbarWidth: 'thin',
                    scrollBehavior: 'smooth',
                    paddingBottom: '8px'
                  }}>
                    {activeCat.skills.map((skill, index) => (
                      <div key={index} className="flex-shrink-0" style={{ width: '120px' }}>
                        <SkillCard skill={skill} index={index} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
                      </div>
                    ))}
                  </div>

                  {/* SMALL/MEDIUM SCREENS (<1400px): Grid Layout (2 rows) */}
                  <div className="d-xxl-none row g-3 justify-content-center">
                    {activeCat.skills.map((skill, index) => (
                      <div key={index} className="col-6 col-md-4 col-lg-3">
                        <SkillCard skill={skill} index={index} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} isMobile={true} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow - End */}
                <button
                  onClick={goToNext}
                  className="nav-arrow d-flex align-items-center justify-content-center border-0 rounded-circle flex-shrink-0"
                  style={{
                    width: '42px',
                    height: '42px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = activeCat.accent;
                    e.currentTarget.style.color = '#021A54';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  <FaChevronRight />
                </button>
              </div>

              <style>{`
                .overflow-x-auto::-webkit-scrollbar { height: 4px; }
                .overflow-x-auto::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 10px; }
                .overflow-x-auto::-webkit-scrollbar-thumb { background: ${activeCat.accent}; border-radius: 10px; }
              `}</style>

            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(5deg); }
          50% { transform: translate(-15px, 25px) rotate(-5deg); }
          75% { transform: translate(20px, 15px) rotate(3deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-pill { transition: all 0.3s ease; }
        .nav-pill:hover { transform: translateY(-2px); }
        .nav-arrow { transition: all 0.3s ease; }
        .nav-arrow:hover { transform: scale(1.05); }
        
        @media (max-width: 991px) {
          .pills-container { flex-wrap: nowrap !important; overflow-x: auto !important; display: flex !important; width: 100% !important; }
          .nav-pill { font-size: 0.75rem !important; padding: 6px 14px !important; white-space: nowrap !important; }
          .skills-card { padding: 1.5rem !important; }
          .nav-arrow { width: 36px !important; height: 36px !important; }
          .nav-arrow svg { font-size: 14px !important; }
        }
        
        @media (max-width: 768px) {
          .col-6 { flex: 0 0 50%; max-width: 50%; }
        }

        body.light-mode .skills-section { background: #ffffff !important; }
        body.light-mode .skills-title { color: #021A54 !important; }
        body.light-mode .skills-subtitle { color: #555 !important; }
        body.light-mode .skills-card { background: rgba(2, 26, 84, 0.05) !important; border-color: rgba(2, 26, 84, 0.1) !important; }
        body.light-mode .skill-name { color: #021A54 !important; }
        body.light-mode .skill-card { background: rgba(2, 26, 84, 0.08) !important; border-color: rgba(2, 26, 84, 0.15) !important; }
        body.light-mode .skill-level { background: rgba(2, 26, 84, 0.15) !important; }
        body.light-mode .nav-arrow { background: rgba(2, 26, 84, 0.1) !important; color: #021A54 !important; }
        body.light-mode .nav-arrow:hover { background: #FF85BB !important; color: #021A54 !important; }
        body.light-mode .pills-container { background: rgba(2, 26, 84, 0.08) !important; border-color: rgba(2, 26, 84, 0.1) !important; }
        body.light-mode .nav-pill { color: #021A54 !important; }
      `}</style>
    </section>
  );
};

const SkillCard = ({ skill, index, hoveredSkill, setHoveredSkill, isMobile = false }) => {
  const isHovered = hoveredSkill === index;
  
  return (
    <div className="skill-item position-relative" style={{ animation: `slideIn 0.4s ease ${index * 0.05}s both`, cursor: 'pointer' }}
      onMouseEnter={() => setHoveredSkill(index)} onMouseLeave={() => setHoveredSkill(null)}>
      <div className={`p-3 rounded-4 text-center skill-card ${isMobile ? '' : 'h-100'}`} style={{
        background: isHovered ? `linear-gradient(145deg, ${skill.color}15, rgba(0,0,0,0.3))` : 'rgba(0, 0, 0, 0.3)',
        border: isHovered ? `1px solid ${skill.color}` : '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 12px 20px rgba(0,0,0,0.2)` : 'none'
      }}>
        <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: '50px' }}>
          <img src={skill.img} alt={skill.name} style={{ width: '40px', height: '40px', objectFit: 'contain', filter: isHovered ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none', transition: '0.3s' }} />
        </div>
        <h6 className="mb-2 skill-name" style={{ fontSize: '0.8rem', fontWeight: '600', lineHeight: '1.2', color: '#ffffff' }}>{skill.name}</h6>
        <div className="w-100 skill-level" style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: isHovered ? `${skill.level}%` : '0%', height: '100%', background: skill.color, transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)', borderRadius: '3px' }} />
        </div>
        {isHovered && (
          <div className="mt-2">
            <span className="badge" style={{ background: skill.color, color: '#021A54', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '20px', fontWeight: '600' }}>{skill.level}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;