import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AdmissionModal from '../modals/AdmissionModal';

import EnglishImg from '../assets/english-clipart-images-29.png';
import MathImg from '../assets/images (6).jpeg';
import UrduImg from '../assets/urdu.jpg';
import IslImg from '../assets/images (3).jpeg';
import GameImg from '../assets/2aaf1e3b0ae9cb20bfb7a7b3bca0e054.jpg';
import ScienceImg from '../assets/images (4).jpeg';
import SocialImg from '../assets/images (5).jpeg';
import ArtImg from '../assets/37dd74c6308861b493ace9aa6c21e703-art-subject-illustration.webp';
import BiologyImg from '../assets/73655894.webp';
import ChemistryImg from '../assets/chemistry-subject-web-header-scientific-260nw-1680424876.webp';
import CSImg from '../assets/computer-science-typographic-header-education-student-write-software-create-code-coding-script-project-digital-217077228.webp';
import PhysicsImg from '../assets/1000_F_443448581_gtJw60MSWI7xhWd6c1Z2Zv2iE0C5AnU0.jpg';

const Course = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [shuffledCourses, setShuffledCourses] = useState([]);


  const courses = [
    { id: 1, title: "English", image: EnglishImg, categories: ["pre-school", "junior-school", "middle-school", "matric-school"], description: "Foundational reading, writing, and counting skills through play-based learning.", updated: "Apr 2025" },
    { id: 2, title: "Mathematics", image: MathImg, categories: ["pre-school", "junior-school", "middle-school", "matric-school"], description: "Build strong numeracy and problem-solving skills.", updated: "Apr 2025" },
    { id: 3, title: "Urdu", image: UrduImg, categories: ["pre-school", "junior-school", "middle-school", "matric-school"], description: "Introduction to compulsory urdu and grammar.", updated: "Apr 2025" },
    { id: 4, title: "Islamic Studies", image: IslImg, categories: ["pre-school", "junior-school", "middle-school", "matric-school"], description: "Introduction to Islamic studies.", updated: "Apr 2025" },
    { id: 5, title: "Games and Sports", image: GameImg, categories: ["pre-school", "junior-school", "middle-school", "matric-school"], description: "Physical education and team-building activities.", updated: "Apr 2025" },
    { id: 6, title: "Science", image: ScienceImg, categories: ["junior-school", "middle-school"], description: "Mechanics, electricity, and waves.", updated: "Apr 2025" },
    { id: 7, title: "Social Studies", image: SocialImg, categories: ["junior-school", "middle-school"], description: "History, geography, and civic education.", updated: "Apr 2025" },
    { id: 8, title: "Art and Craft", image: ArtImg, categories: ["pre-school", "junior-school", "middle-school"], description: "Creative expression through drawing, painting, and crafts.", updated: "Apr 2025" },
    { id: 9, title: "Biology", image: BiologyImg, categories: ["matric-school"], description: "Study of living organisms and life processes.", updated: "Apr 2025" },
    { id: 10, title: "Chemistry", image: ChemistryImg, categories: ["matric-school"], description: "Elements, compounds, reactions, and lab experiments.", updated: "Apr 2025" },
    { id: 11, title: "Computer Science", image: CSImg, categories: ["middle-school", "matric-school"], description: "Programming, algorithms, and digital literacy.", updated: "Apr 2025" },
    { id: 12, title: "Physics", image: PhysicsImg, categories: ["matric-school"], description: "Mechanics, electricity, and waves.", updated: "Apr 2025" }
  ];

 
  const shuffleArray = (array) => {
    return array
      .map(item => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

 
  useEffect(() => {
    setShuffledCourses(shuffleArray(courses));
  }, [filter]);


  const filteredCourses = shuffledCourses.filter(course => {
    const matchesFilter = filter === 'all' || course.categories.includes(filter);
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>


      <div className="container my-5 py-5 pt-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark">Courses Offered</h1>
          <p className="lead text-muted">Explore our curriculum by school level</p>
        </div>

        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">

         
          <div className="d-flex flex-wrap gap-2">
            <button 
              className={`btn rounded-4 ${filter === 'all' ? 'bg-success text-white' : 'btn-light'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>

            <button 
              className={`btn rounded-4 ${filter === 'pre-school' ? 'bg-success text-white' : 'btn-light'}`}
              onClick={() => setFilter('pre-school')}
            >
              Pre School
            </button>

            <button 
              className={`btn rounded-4 ${filter === 'junior-school' ? 'bg-success text-white' : 'btn-light'}`}
              onClick={() => setFilter('junior-school')}
            >
              Junior School
            </button>

            <button 
              className={`btn rounded-4 ${filter === 'middle-school' ? 'bg-success text-white' : 'btn-light'}`}
              onClick={() => setFilter('middle-school')}
            >
              Middle School
            </button>

            <button 
              className={`btn rounded-4 ${filter === 'matric-school' ? 'bg-success text-white' : 'btn-light'}`}
              onClick={() => setFilter('matric-school')}
            >
              Matric School
            </button>
          </div>

       
          <div className="input-group w-auto">
            <span className="input-group-text bg-white border-end-0">
              <i className="fas fa-search text-muted"></i>
            </span>
            <input 
              type="text" 
              className="form-control border-start-0" 
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-4">
          {filteredCourses.map(course => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body bg-white p-4">
                  {course.categories.map((category, index) => (
                    <span 
                      key={index} 
                      className="badge bg-secondary bg-opacity-25 text-dark mb-2 me-1"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                    </span>
                  ))}

                  <h5 className="card-title fw-bold mb-2">{course.title}</h5>
                  <p className="card-text text-muted mb-3">{course.description}</p>
                  <small className="text-success">Updated: {course.updated}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdmissionModal />
    </>
  );
};

export default Course;
