
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AdmissionModal from '../modals/AdmissionModal';

import image1 from '../assets/WhatsApp Image 2025-10-21 at 20.06.53_8e7375f3.jpg';
import image2 from '../assets/WhatsApp Image 2025-10-21 at 20.06.54_71af0f4c.jpg';
import image3 from '../assets/images (8).jpeg';
import image4 from '../assets/portrait-indian-male-teacher-standing-260nw-1765602338.jpg';
import image5 from '../assets/images (7).jpeg';
import image6 from '../assets/smiling-young-indian-business-man-260nw-2187607303.jpg';
import image7 from '../assets/imgi_9_doc-4.jpg';
import image8 from '../assets/WhatsApp Image 2025-10-21 at 20.06.53_932ffebe.jpg';

const Faculty = () => {
  
  const initialFaculty = [
    { id: 1, name: "Ayesha Khan", subject: "Urdu And Islamic Studies", description: "Believes in nurturing critical thinking through storytelling and creative expression.", image: image1 },
    { id: 2, name: "Mr. Bilal Ahmed", subject: "Mathematics", description: "Makes math fun with real-life applications and problem-solving challenges.", image: image2 },
    { id: 3, name: "Ms. Fatima Naseem", subject: "Chemistry", description: "Inspires curiosity through hands-on lab experiments and scientific inquiry.", image: image3 },
    { id: 4, name: "Mr. Omar Farooq", subject: "Computer Science", description: "Teaches coding with creativity, logic, and real-world tech projects.", image: image4 },
    { id: 5, name: "Ms. Sana Malik", subject: "English", description: "Fosters cultural identity and moral values through language and tradition.", image: image5 },
    { id: 6, name: "Dr. Imran Shah", subject: "Physics", description: "Simplifies complex concepts with demonstrations and interactive learning.", image: image6 },
    { id: 7, name: "Dr. Ayesha Khan", subject: "Biology", description: "Believes in nurturing critical thinking through storytelling and creative expression.", image: image7 },
    { id: 8, name: "Miss Saima Naaz", subject: "Social Studies", description: "Makes math fun with real-life applications and problem-solving challenges.", image: image8 },
  ];

  const [faculty, setFaculty] = useState(() => {
    const savedFaculty = localStorage.getItem('faculty');
    return savedFaculty ? JSON.parse(savedFaculty) : initialFaculty;
  });

  return (
    <>
      <Navbar />
      <main className="pt-3">
        <section className="py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark">Our Faculty</h2>
              <p className="lead text-muted">Meet our dedicated and passionate educators</p>
            </div>
            
            {/* Faculty Cards Grid */}
            <div className="row g-4">
              {faculty.map(f => (
                <div key={f.id} className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                    {f.image && (
                      <img
                        src={f.image}
                        alt={f.name}
                        className="card-img-top"
                        style={{ height: '350px', width: '100%', objectFit: 'cover' }}
                      />
                    )}
                    <div className="card-body text-center" style={{ minHeight: '120px' }}>
                      <h5 className="card-title fw-bold mb-1">{f.name}</h5>
                      <p className="text-warning mb-2">{f.subject}</p>
                      <p className="card-text text-muted small">{f.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
            {faculty.length === 0 && (
              <div className="text-center py-5">
                <h4 className="text-muted">No faculty members available at the moment.</h4>
              </div>
            )}
          </div>
        </section>
      </main>
      <AdmissionModal />
    </>
  );
};

export default Faculty;