import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaCode, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import hospital from '../assets/hospital1.png';
import school from '../assets/school.png';
import airport from '../assets/airport.png';
import taskify from '../assets/taskify.png';
import counter from '../assets/counter.png';
import stock from '../assets/stock2.png';
import hiree from '../assets/hiree.png';
import smartmarket from '../assets/smartmarket.png';
import vendorpro from '../assets/vendorpro.png';

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
  title: 'Smart Marketplace',
  description: 'A full-stack MERN marketplace where users can buy products, book services, chat in real time, manage bookings, and access secure role-based dashboards.',
  image: smartmarket,
  category: 'Full Stack',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
  codeLink: 'https://github.com/fatimahamir/smart-marketplace',
  liveLink: 'https://smart-marketplace-navy.vercel.app'
},
    {
      id: 2,
      title: 'Hiree - Service Marketplace',
      description: 'Full-stack MERN platform connecting freelancers with clients. Features include service booking, job applications, and role-based dashboards.',
      image: hiree,
      category: 'Full Stack',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      codeLink: 'https://github.com/fatimahamir/Hiree-Project', 
      liveLink: 'https://hiree-project.vercel.app/' 
    },
    
{
  id: 3,
  title: 'VendorPro',
  description: 'A modern MERN vendor management platform that helps businesses manage vendors and quotation requests efficiently. Users can add vendors, create and track quotations, compare vendor proposals.',
  image: vendorpro,
  category: 'Full Stack',
  tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  codeLink: 'https://github.com/fatimahamir/VendorPro',
  liveLink: 'https://vendorpro.vercel.app/'
},
     {
      id: 4,
      title: 'Stock Master-Inventory Management System',
      description: 'Smart inventory manager with live stock updates, automated reorder alerts, and clean analytics for modern operations.',
      image: stock,
      category: 'Full Stack',
      tech: ['NodeJS', 'MongoDB Atlas', 'Express Js'],
      codeLink: 'https://github.com/fatimahamir/inventory-management/tree/main',
      liveLink: 'https://inventory-management-seven-virid.vercel.app/'
    },
    
    {
      id: 5,
      title: 'Hospital Management System',
      description: 'Designed and Developed the interface for Hospital website using Html CSS Js and Bootstrap',
      image: hospital,
      category: 'Frontend',
      tech: ['HTML5', 'CSS3', 'JS', 'Bootstrap'],
      codeLink: 'https://github.com/fatimahamir/hospitalwebsitedr.care-',
      liveLink: 'https://fatimahamir.github.io/hospitalwebsitedr.care-/'
    },
    {
      id: 6,
      title: 'School Management System', 
      description: 'Designed and Developed the interface for School website using REACT and Bootstrap. Implement Application Form',
      image: school,
      category: 'Frontend',
      tech: ['React.js', 'Bootstrap'],
      codeLink: 'https://github.com/fatimahamir/loginschoolapp',
      liveLink: 'https://fatimahamir.github.io/loginschoolapp/'
    },
    {
      id: 7,
      title: ' Taskify — Task & Team Management App',
      description: 'A React-based task management application for teams — create teams, assign tasks, track progress, and manage everything from a clean dashboard with dark/light mode.',
      image: taskify,
      category: 'Frontend',
      tech: ['React Js', 'Vite', 'Bootstrap'],
      codeLink: 'https://github.com/fatimahamir/Taskify',
      liveLink: 'https://fatimahamir.github.io/Taskify//#/splash'
    },
    {
      id: 8,
      title: 'Airport Management System',
      description: 'Designed and Developed the interface for Airport website using REACT and Bootstrap. Implement CRUD operation',
      image: airport,
      category: 'Frontend',
      tech: ['React.js', 'Bootstrap', 'CRUD'],
      codeLink: 'https://github.com/fatimahamir/Airport-Mangment-system',
      liveLink: 'https://fatimahamir.github.io/Airport-Mangment-system/'
    },
    {
      id: 9,
      title: 'Custom React Counter',
      description: 'A smooth animated counter built with React that dynamically updates numbers with engaging transitions for a modern UI experience.',
      image: counter,
      category: 'Frontend',
      tech: ['React Js', 'Vite'],
      codeLink: 'https://github.com/fatimahamir/CounterProject/tree/main',
      liveLink: 'https://counter-project-react-kappa.vercel.app/'
    }
    
   
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1400) setCardsPerView(4);
      else if (window.innerWidth >= 992) setCardsPerView(3);
      else if (window.innerWidth >= 576) setCardsPerView(2);
      else setCardsPerView(1);
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
    if (containerRef.current) setScrollPosition(containerRef.current.scrollLeft);
  };

  const getFilterLabel = () => activeFilter === 'all' ? 'All Projects' : activeFilter;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setIsDropdownOpen(false);
  };

  return (
    <section 
      id="projects" 
      className="py-5 position-relative projects-section"
      style={{ backgroundColor: "rgba(2, 26, 84, 1)" }}
    >
      <div className="container py-4 position-relative">
        
        {/* Header: Title Left + Filter Right */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4" style={{ gap: '1rem' }}>
          
          {/* Title - Left Side */}
          <div>
            <span className="small d-block" style={{ color: '#FF85BB', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600',lineHeight:'2.4rem' }}>
  ✦ PORTFOLIO ✦
</span>
            <h2 
              className="fw-bold mb-1 projects-title heading-underline"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#fff", textAlign: "left" ,lineHeight: "1.2",}}
            >
              My <span style={{ color: "#FF85BB" }}>Projects</span>
            </h2> <br />
            <p className="text-secondary projects-subtitle mt-3 " style={{ maxWidth: "400px", margin: "0", lineHeight: "1.4", fontSize: "0.85rem" }}>
               Explore my latest projects showcasing frontend & full-stack development skills
            </p>
          </div>

          {/* Filter Controls - Right Side */}
          <div className="ms-auto" ref={dropdownRef}>
            
            {/* Desktop: Filter Buttons */}
            <div className="d-none d-lg-flex gap-2 bg-dark p-1 rounded-5">
              {['all', 'Frontend', 'Full Stack'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="px-3 py-2 rounded-pill fw-semibold border-0"
                  style={{
                    background: activeFilter === filter ? "#FF85BB" : "rgba(255,255,255,0.05)",
                    color: activeFilter === filter ? "#021A54" : "#fff",
                    transition: "all 0.3s ease",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={(e) => { if (activeFilter !== filter) e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                  onMouseLeave={(e) => { if (activeFilter !== filter) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>

            {/* Mobile/Tablet: Dropdown */}
            <div className="d-lg-none position-relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 py-2 rounded-pill fw-semibold border-0 d-flex align-items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                {getFilterLabel()} <FaChevronDown style={{ fontSize: "0.65rem", transition: "transform 0.3s", transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)" }} />
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="position-absolute end-0 mt-2 py-2 rounded-3"
                  style={{
                    background: "rgba(2, 26, 84, 0.98)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,133,187,0.3)",
                    minWidth: "150px",
                    zIndex: 9999,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    overflow: "hidden"
                  }}
                >
                  <button
                    onClick={() => handleFilterChange('all')}
                    className="w-100 text-start px-4 py-2 border-0"
                    style={{
                      background: activeFilter === 'all' ? "#FF85BB" : "transparent",
                      color: activeFilter === 'all' ? "#021A54" : "#fff",
                      transition: "all 0.2s",
                      fontSize: "0.85rem",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => { if (activeFilter !== 'all') e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                    onMouseLeave={(e) => { if (activeFilter !== 'all') e.currentTarget.style.background = "transparent"; }}
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => handleFilterChange('Frontend')}
                    className="w-100 text-start px-4 py-2 border-0"
                    style={{
                      background: activeFilter === 'Frontend' ? "#FF85BB" : "transparent",
                      color: activeFilter === 'Frontend' ? "#021A54" : "#fff",
                      transition: "all 0.2s",
                      fontSize: "0.85rem",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => { if (activeFilter !== 'Frontend') e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                    onMouseLeave={(e) => { if (activeFilter !== 'Frontend') e.currentTarget.style.background = "transparent"; }}
                  >
                    Frontend
                  </button>
                  <button
                    onClick={() => handleFilterChange('Full Stack')}
                    className="w-100 text-start px-4 py-2 border-0"
                    style={{
                      background: activeFilter === 'Full Stack' ? "#FF85BB" : "transparent",
                      color: activeFilter === 'Full Stack' ? "#021A54" : "#fff",
                      transition: "all 0.2s",
                      fontSize: "0.85rem",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => { if (activeFilter !== 'Full Stack') e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                    onMouseLeave={(e) => { if (activeFilter !== 'Full Stack') e.currentTarget.style.background = "transparent"; }}
                  >
                    Full Stack
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Slider */}
        <div className="position-relative" style={{ padding: '0 30px' }}>
          
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="position-absolute d-flex align-items-center justify-content-center projects-arrow d-none d-sm-flex"
            style={{
              left: "0", top: "50%", transform: "translateY(-50%)", zIndex: 10,
              width: "36px", height: "36px", borderRadius: "50%",
              background: "rgba(2, 26, 84, 0.9)", border: "1px solid rgba(255,133,187,0.5)",
              color: "#fff", cursor: "pointer", transition: "all 0.3s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#FF85BB"; e.currentTarget.style.color = "#021A54"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(2, 26, 84, 0.9)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
          >
            <FaArrowLeft size={14} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="position-absolute d-flex align-items-center justify-content-center projects-arrow d-none d-sm-flex"
            style={{
              right: "0", top: "50%", transform: "translateY(-50%)", zIndex: 10,
              width: "36px", height: "36px", borderRadius: "50%",
              background: "rgba(2, 26, 84, 0.9)", border: "1px solid rgba(255,133,187,0.5)",
              color: "#fff", cursor: "pointer", transition: "all 0.3s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#FF85BB"; e.currentTarget.style.color = "#021A54"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(2, 26, 84, 0.9)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
          >
            <FaArrowRight size={14} />
          </button>

          {/* Projects Container */}
          <div 
            ref={containerRef}
            id="projects-container"
            className="d-flex"
            style={{
              gap: "20px", overflowX: "auto", overflowY: "hidden",
              scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none",
              padding: "15px 5px"
            }}
            onScroll={handleScroll}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="flex-shrink-0" style={{ width: getCardWidth(), minWidth: cardsPerView === 1 ? "260px" : "auto" }}>
                <div 
                  className="card h-100 border-0 project-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)", borderRadius: "20px",
                    overflow: "hidden", transition: "all 0.3s ease", backdropFilter: "blur(10px)"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 133, 187, 0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="position-relative overflow-hidden" style={{ height: "180px" }}>
                    <img src={project.image} alt={project.title} className="w-100 h-100" style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => e.target.style.transform = "scale(1.08)"}
                      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    />
                    <span className="position-absolute top-0 start-0 m-2 px-2 py-1 rounded-pill project-badge"
                      style={{ background: "linear-gradient(135deg, #FF85BB, #e06ea0)", color: "#021A54", fontSize: "0.65rem", fontWeight: "600" }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="card-body p-3">
                    <h5 className="card-title text-white fw-bold mb-2 project-title" style={{ fontSize: "0.95rem", lineHeight: "1.3" }}>{project.title}</h5>
                    <p className="card-text text-secondary mb-3 project-desc" style={{ fontSize: "0.75rem", lineHeight: "1.4" }}>
                      {project.description.substring(0, 90)}...
                    </p>
                    
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-pill" style={{
                          background: "rgba(255, 133, 187, 0.15)", color: "#FF85BB",
                          fontSize: "0.6rem", fontWeight: "500", border: "1px solid rgba(255, 133, 187, 0.3)"
                        }}>{tech}</span>
                      ))}
                    </div>
                    
                    <div className="d-flex gap-2">
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                        className="btn rounded-pill px-2 py-1 fw-semibold flex-fill project-btn-code"
                        style={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.2)", transition: "all 0.3s", fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                      >
                        <FaCode size={9} /> Code
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                        className="btn rounded-pill px-2 py-1 fw-semibold flex-fill project-btn-view"
                        style={{ background: "#FF85BB", color: "#021A54", border: "none", transition: "all 0.3s", fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                      >
                        <FaExternalLinkAlt size={9} /> View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Styles */}
        <style>{`
          #projects-container::-webkit-scrollbar { display: none; }
          .projects-arrow { transition: all 0.3s ease; }
          
          @media (max-width: 575px) {
            .projects-arrow { display: flex !important; width: 32px !important; height: 32px !important; }
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