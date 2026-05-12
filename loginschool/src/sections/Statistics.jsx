
import React from 'react';



const Statistics = () => {
  const statsData = [
    { icon: 'fa-solid fa-user', color: '#9c27b0', count: '36,076', label: 'Students Enrolled' },
    { icon: 'fa-solid fa-building', color: '#4caf50', count: '786', label: 'Our Branches' },
    { icon: 'fa-solid fa-book', color: '#ff5722', count: '3,630', label: 'Total Courses' },
    { icon: 'fa-solid fa-medal', color: '#2196f3', count: '6,300', label: 'Awards Won' },
  ];

  return (
    <section id="statistics" className="container-fluid my-5 py-5">
      <div className="container">
        <div className="text-center mb-5">
          <small className="text-uppercase d-block">OUR STATISTICS</small>
          <h2 className="display-5 fw-bold">We are Proud to Share with You</h2>
        </div>
        <div className="row g-4 text-center my-5">
          {statsData.map((stat, index) => (
            <div className="col-md-6 col-lg-3 stat-item" key={index}>
              <div className="fs-1 mb-3" style={{ color: stat.color }}>
                <i className={stat.icon}></i>
              </div>
              <div className="display-6 fw-bold">{stat.count}</div> 
              <p className="mt-2 mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;