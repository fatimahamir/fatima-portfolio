import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaCode, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import hospital from '../assets/hospital1.png';
import school from '../assets/school.png';
import airport from '../assets/airport.png';
import counter from '../assets/counter.png';
import stock from '../assets/stock2.png';

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: 'Hospital Management System',
      description: 'Designed and Developed the interface for Hospital website using Html CSS Js and Bootstrap',
      image: hospital,
      category: 'Frontend',
      tech: ['HTML5', 'CSS3', 'JS', 'Bootstrap'],
      codeLink: 'https://github.com/fatimahamir/hospitalwebsitedr.care-',
      liveLink: 'https://fatimahamir.github.io/hospitalwebsitedr.care-/'
    },
    {
      id: 2,
      title: 'School Management System', 
      description: 'Designed and Developed the interface for School website using REACT and Bootstrap. Implement Application Form',
      image: school,
      category: 'Frontend',
      tech: ['React.js', 'Bootstrap',],
      codeLink: 'https://github.com/fatimahamir/loginschoolapp',
      liveLink: 'https://fatimahamir.github.io/loginschoolapp/'
    },
    {
      id: 3,
      title: 'Airport Management System',
      description: 'Designed and Developed the interface for Airport website using REACT and Bootstrap. Implement CRUD operation',
      image: airport,
      category: 'Frontend',
      tech: ['React.js', 'Bootstrap', 'CRUD',],
      codeLink: 'https://github.com/fatimahamir/Airport-Mangment-system',
      liveLink: 'https://fatimahamir.github.io/Airport-Mangment-system/'
    },
    {
      id: 4,
      title: 'Custom React Counter ',
      description: 'A smooth animated counter built with React that dynamically updates numbers with engaging  a modern UI experience."',
      image: counter,
      category: 'Frontend',
      tech: ['React Js', 'Vite'],
      codeLink: 'https://github.com/fatimahamir/CounterProject/tree/main',
      liveLink: 'https://counter-project-react-kappa.vercel.app/'
    },
    {
      id: 5,
      title: 'Inventory Mangement system',
      description: 'Smart inventory manager with live stock updates, automated reorder alerts, and clean analytics for modern operations.',
      image: stock ,
      category: 'Full Stack',
      tech: ['NodejS', 'Mongodb Atlas', 'Express Js'],
      codeLink: 'https://github.com/fatimahamir/inventory-management/tree/main',
      liveLink: 'https://inventory-management-seven-virid.vercel.app/'
    }
  ];

  // Filter projects
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1400) {
        setCardsPerView(4);
      } else if (window.innerWidth >= 992) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 576) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCardWidth = () => {
    const gap = 24;
    return `calc(${100 / cardsPerView}% - ${gap * (cardsPerView - 1) / cardsPerView}px)`;
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / cardsPerView;
      const newPosition = Math.max(0, scrollPosition - cardWidth);
      containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / cardsPerView;
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + cardWidth);
      containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const getFilterLabel = () => {
    if (activeFilter === 'all') return 'All Projects';
    return activeFilter;
  };

  return (
    <section 
      id="projects" 
      className="py-5 position-relative projects-section"
      style={{ 
        backgroundColor: "rgba(2, 26, 84, 1)",
        minHeight: "100vh"
      }}
    >
      <div className="container py-4 position-relative">
        
        {/* Header Row - Title Left, Filter Right - ALWAYS RIGHT on ALL screens */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <div>
            <h2 
              className="fw-bold mb-1 projects-title"
              style={{ 
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                color: "#fff",
                textAlign: "left"
              }}
            >
              My <span style={{ color: "#FF85BB" }}>Projects</span>
            </h2>
            <p className="text-secondary projects-subtitle" style={{ maxWidth: "550px", margin: "0", lineHeight: "1.6", fontSize: "0.9rem" }}>
              Here are some of my recent works. Each project represents unique challenges and creative solutions.
            </p>
          </div>

          {/* Desktop: Filter Buttons - Visible on ≥992px */}
          <div className="d-none d-lg-flex gap-2 bg-dark p-2 rounded-5">
            <button
              onClick={() => setActiveFilter('all')}
              className="px-3 px-md-4 py-2 rounded-pill fw-semibold border-0"
              style={{
                background: activeFilter === 'all' ? "#FF85BB" : "rgba(255,255,255,0.05)",
                color: activeFilter === 'all' ? "#021A54" : "#fff",
                transition: "all 0.3s ease",
                fontSize: "clamp(0.7rem, 3vw, 0.85rem)",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== 'all') {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== 'all') {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }
              }}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('Frontend')}
              className="px-3 px-md-4 py-2 rounded-pill fw-semibold border-0"
              style={{
                background: activeFilter === 'Frontend' ? "#FF85BB" : "rgba(255,255,255,0.05)",
                color: activeFilter === 'Frontend' ? "#021A54" : "#fff",
                transition: "all 0.3s ease",
                fontSize: "clamp(0.7rem, 3vw, 0.85rem)",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== 'Frontend') {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== 'Frontend') {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }
              }}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveFilter('Full Stack')}
              className="px-3 px-md-4 py-2 rounded-pill fw-semibold border-0"
              style={{
                background: activeFilter === 'Full Stack' ? "#FF85BB" : "rgba(255,255,255,0.05)",
                color: activeFilter === 'Full Stack' ? "#021A54" : "#fff",
                transition: "all 0.3s ease",
                fontSize: "clamp(0.7rem, 3vw, 0.85rem)",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== 'Full Stack') {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== 'Full Stack') {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }
              }}
            >
              Full Stack
            </button>
          </div>

          {/* Mobile/Tablet: Dropdown Menu - ALWAYS RIGHT ALIGNED in the same row */}
          <div className="d-lg-none" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 rounded-pill fw-semibold border-0 d-flex align-items-center gap-2"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                transition: "all 0.3s ease",
                fontSize: "0.85rem",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              {getFilterLabel()} <FaChevronDown style={{ fontSize: "0.7rem", transition: "transform 0.3s", transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)" }} />
            </button>
            
            {isDropdownOpen && (
              <div 
                className="position-absolute end-0 mt-2 py-2 rounded-3"
                style={{
                  background: "rgba(2, 26, 84, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,133,187,0.3)",
                  minWidth: "150px",
                  zIndex: 20
                }}
              >
                <button
                  onClick={() => {
                    setActiveFilter('all');
                    setIsDropdownOpen(false);
                  }}
                  className="w-100 text-start px-4 py-2 border-0"
                  style={{
                    background: activeFilter === 'all' ? "#FF85BB" : "transparent",
                    color: activeFilter === 'all' ? "#021A54" : "#fff",
                    transition: "all 0.2s",
                    fontSize: "0.85rem",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== 'all') {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== 'all') {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  All Projects
                </button>
                <button
                  onClick={() => {
                    setActiveFilter('Frontend');
                    setIsDropdownOpen(false);
                  }}
                  className="w-100 text-start px-4 py-2 border-0"
                  style={{
                    background: activeFilter === 'Frontend' ? "#FF85BB" : "transparent",
                    color: activeFilter === 'Frontend' ? "#021A54" : "#fff",
                    transition: "all 0.2s",
                    fontSize: "0.85rem",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== 'Frontend') {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== 'Frontend') {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  Frontend
                </button>
                <button
                  onClick={() => {
                    setActiveFilter('Full Stack');
                    setIsDropdownOpen(false);
                  }}
                  className="w-100 text-start px-4 py-2 border-0"
                  style={{
                    background: activeFilter === 'Full Stack' ? "#FF85BB" : "transparent",
                    color: activeFilter === 'Full Stack' ? "#021A54" : "#fff",
                    transition: "all 0.2s",
                    fontSize: "0.85rem",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== 'Full Stack') {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== 'Full Stack') {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  Full Stack
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Projects Slider with Arrows - Both Ends */}
        <div className="position-relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="position-absolute d-flex align-items-center justify-content-center projects-arrow"
            style={{
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(2, 26, 84, 0.9)",
              border: "1px solid rgba(255,133,187,0.5)",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF85BB";
              e.currentTarget.style.color = "#021A54";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(2, 26, 84, 0.9)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <FaArrowLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="position-absolute d-flex align-items-center justify-content-center projects-arrow"
            style={{
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(2, 26, 84, 0.9)",
              border: "1px solid rgba(255,133,187,0.5)",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF85BB";
              e.currentTarget.style.color = "#021A54";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(2, 26, 84, 0.9)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <FaArrowRight />
          </button>

          {/* Projects Container */}
          <div 
            ref={containerRef}
            id="projects-container"
            className="d-flex"
            style={{
              gap: "24px",
              overflowX: "auto",
              overflowY: "hidden",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              padding: "10px 5px"
            }}
            onScroll={handleScroll}
          >
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="flex-shrink-0"
                style={{
                  width: getCardWidth(),
                  minWidth: cardsPerView === 1 ? "280px" : "auto"
                }}
              >
                <div 
                  className="card h-100 border-0 project-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 133, 187, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    />
                    <span 
                      className="position-absolute top-0 start-0 m-3 px-1 py-1 rounded-pill project-badge"
                      style={{
                        background: "linear-gradient(135deg, #FF85BB, #e06ea0)",
                        color: "#021A54",
                        fontSize: "0.7rem",
                        fontWeight: "600"
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="card-body p-3 p-md-4">
                    <h5 className="card-title text-white fw-bold mb-2 project-title" style={{ fontSize: "1rem" }}>
                      {project.title}
                    </h5>
                    <p className="card-text text-secondary mb-3 project-desc" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                      {project.description.substring(0, 80)}...
                    </p>
                    
                    <div className="d-flex flex-wrap gap-1 justify-content-start mb-3">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-pill" style={{
                          background: "rgba(255, 133, 187, 0.15)",
                          color: "#FF85BB",
                          fontSize: "0.65rem",
                          fontWeight: "500",
                          border: "1px solid rgba(255, 133, 187, 0.3)"
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="d-flex gap-2">
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                        className="btn rounded-pill px-2 py-1 fw-semibold flex-fill project-btn-code"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "#fff",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          transition: "all 0.3s",
                          fontSize: "0.7rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px"
                        }}>
                        <FaCode size={10} /> Code
                      </a>

                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                        className="btn rounded-pill px-2 py-1 fw-semibold flex-fill project-btn-view"
                        style={{
                          background: "#FF85BB",
                          color: "#021A54",
                          border: "none",
                          transition: "all 0.3s",
                          fontSize: "0.7rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px"
                        }}>
                        <FaExternalLinkAlt size={10} /> View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          #projects-container::-webkit-scrollbar { display: none; }
          .projects-arrow { transition: all 0.3s ease; }
          
          @media (max-width: 768px) {
            .projects-arrow { width: 35px !important; height: 35px !important; left: -10px !important; right: -10px !important; }
          }
          @media (max-width: 576px) {
            .projects-arrow { width: 30px !important; height: 30px !important; left: -8px !important; right: -8px !important; }
          }
        `}</style>

      </div>

      {/* Light Mode CSS */}
      <style>{`
        body.light-mode .projects-section { background-color: #ffffff !important; }
        body.light-mode .projects-title { color: #021A54 !important; }
        body.light-mode .projects-subtitle { color: #555 !important; }
        body.light-mode .project-card { background: rgba(2, 26, 84, 0.05) !important; }
        body.light-mode .project-title { color: #021A54 !important; }
        body.light-mode .project-desc { color: #555 !important; }
        body.light-mode .project-btn-code { background: rgba(2, 26, 84, 0.08) !important; color: #021A54 !important; }
      `}</style>
    </section>
  );
};

export default Projects;