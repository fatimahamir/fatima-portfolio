
import React from 'react';
import bgImage from '../assets/imgi_20_bg3.jpg';
import image1 from '../assets/imgi_10_testi1.jpg';
import image2 from '../assets/imgi_11_testi2.jpg';
import image3 from '../assets/imgi_12_testi3.jpg';
import image4 from '../assets/imgi_11_testi2.jpg';

const Testimonials = () => {
  return (
    <section id="testimonal" className="my-5">
      <div 
        className="container-fluid my-5 position-relative py-5" 
        style={{
          background: `url(${bgImage}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-50"></div>
        <div className="container position-relative z-2">
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-inner text-white text-center">
              
              
              <div className="carousel-item active">
                <div className="d-inline-block mb-4">
                  <img 
                    src={image1} 
                    alt="Ayesha Khan" 
                    className="rounded-circle border border-white border-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                  />
                </div>
                <blockquote className="fs-5 mb-4 px-3">
                  This school provides an excellent learning environment. The
                  teachers are very supportive and always encourage students to do
                  their best
                </blockquote>
                <p className="fw-bold fs-4 mb-0">Ayesha Khan</p>
              </div>
              
        
              <div className="carousel-item">
                <div className="d-inline-block mb-4">
                  <img 
                    src={image2} 
                    alt="Amnna Liaqat" 
                    className="rounded-circle border border-white border-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                  />
                </div>
                <blockquote className="fs-5 mb-4 px-3">
                  "I love how the school focuses on both academics and
                  extracurricular activities. It has really helped me grow in
                  confidence"
                </blockquote>
                <p className="fw-bold fs-4 mb-0">Amnna Liaqat</p>
              </div>
              
            
              <div className="carousel-item">
                <div className="d-inline-block mb-4">
                  <img 
                    src={image3} 
                    alt="Nadiya Khan" 
                    className="rounded-circle border border-white border-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                  />
                </div>
                <blockquote className="fs-5 mb-4 px-3">
                  "The classrooms are well-equipped, and the teachers make every
                  lesson interesting. I've learned so much this year"
                </blockquote>
                <p className="fw-bold fs-4 mb-0">Nadiya Khan</p>
              </div>
              
              
              <div className="carousel-item">
                <div className="d-inline-block mb-4">
                  <img 
                    src={image4} 
                    alt="Sofia R." 
                    className="rounded-circle border border-white border-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                  />
                </div>
                <blockquote className="fs-5 mb-4 px-3">
                  "I'm proud to be a part of this school. The staff genuinely cares
                  about every student's progress and well-being"
                </blockquote>
                <p className="fw-bold fs-4 mb-0">Sofia R.</p>
              </div>
              
            </div>
            
           
            <div className="carousel-indicators position-relative mt-4">
              <button 
                type="button" 
                data-bs-target="#testimonialCarousel" 
                data-bs-slide-to="0" 
                className="active"
                aria-current="true" 
                aria-label="Slide 1"
              ></button>
              <button 
                type="button" 
                data-bs-target="#testimonialCarousel" 
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button 
                type="button" 
                data-bs-target="#testimonialCarousel" 
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button 
                type="button" 
                data-bs-target="#testimonialCarousel" 
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;