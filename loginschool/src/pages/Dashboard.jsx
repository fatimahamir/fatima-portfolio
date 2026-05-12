// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdmissionModal from '../modals/AdmissionModal';

const Dashboard = () => {
  const [summaryData, setSummaryData] = useState({
    teachers: 0,
    studentsApplied: 0,
    studentsAccepted: 0,
    studentsRejected: 0
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [recentActivity, setRecentActivity] = useState([]);

  // Helper to get previous state from localStorage
  const getPrevData = (key) => {
    return JSON.parse(localStorage.getItem(`prev_${key}`) || '[]');
  };

  const savePrevData = (key, data) => {
    localStorage.setItem(`prev_${key}`, JSON.stringify(data));
  };

  const updateSummaryAndActivity = () => {
    const faculty = JSON.parse(localStorage.getItem('faculty') || '[]');
    const applications = JSON.parse(localStorage.getItem('studentApplications') || '[]');

    const appliedCount = applications.filter(app => app.status === 'Applied').length;
    const acceptedCount = applications.filter(app => app.status === 'Accepted').length;
    const rejectedCount = applications.filter(app => app.status === 'Rejected').length;

    setSummaryData({
      teachers: faculty.length,
      studentsApplied: appliedCount,
      studentsAccepted: acceptedCount,
      studentsRejected: rejectedCount
    });

    // Compare with previous state to detect changes
    const prevFaculty = getPrevData('faculty');
    const prevApplications = getPrevData('studentApplications');

    const activities = [];

    // Faculty added/edited/deleted
    faculty.forEach(f => {
      const prev = prevFaculty.find(p => p.id === f.id);
      if (!prev) {
        activities.push({ type: 'facultyAdded', message: `New faculty added: ${f.name}`, time: new Date().toISOString() });
      } else if (JSON.stringify(prev) !== JSON.stringify(f)) {
        activities.push({ type: 'facultyEdited', message: `Faculty updated: ${f.name}`, time: new Date().toISOString() });
      }
    });
    prevFaculty.forEach(f => {
      if (!faculty.find(p => p.id === f.id)) {
        activities.push({ type: 'facultyDeleted', message: `Faculty deleted: ${f.name}`, time: new Date().toISOString() });
      }
    });

    // Student applications added or status changed
    applications.forEach(app => {
      const prev = prevApplications.find(p => p.id === app.id);
      if (!prev) {
        activities.push({ type: 'studentApplied', message: `New application: ${app.name}`, time: new Date().toISOString() });
      } else if (prev.status !== app.status) {
        activities.push({ type: 'studentStatusChanged', message: `${app.name}'s status changed to ${app.status}`, time: new Date().toISOString() });
      }
    });

    // Merge with existing recentActivity and keep latest 10
    setRecentActivity(prev => [...activities, ...prev].slice(0, 10));

    // Save current state as previous state for next comparison
    savePrevData('faculty', faculty);
    savePrevData('studentApplications', applications);
  };

  useEffect(() => {
    updateSummaryAndActivity();
    const handleStorageChange = () => updateSummaryAndActivity();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="container-fluid" style={{ paddingTop: '80px' }}>
        <div className="row my-4">
          <div className="col-12">
            <h2 className="text-dark">Admin Dashboard</h2>
            <p className="text-muted">Jinnah Officers School</p>
          </div>
        </div>

    
        <div className="row mb-4">
          <div className="col-md-3 mb-3">
            <div className="card bg-warning text-white h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="card-title">Teachers</h6>
                    <h2 className="mb-0">{summaryData.teachers}</h2>
                  </div>
                  <div className="align-self-center">
                    <i className="fa-solid fa-chalkboard-user fa-2x"></i>
                  </div>
                </div>
                <Link to="/faculty-admin" className="text-white text-decoration-none mt-2">
                  Manage Teachers <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="card-title">Students Applied</h6>
                    <h2 className="mb-0">{summaryData.studentsApplied}</h2>
                  </div>
                  <div className="align-self-center">
                    <i className="fa-solid fa-user-graduate fa-2x"></i>
                  </div>
                </div>
                <Link to="/students" className="text-white text-decoration-none mt-2">
                  View Applications <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card bg-info text-white h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="card-title">Students Accepted</h6>
                    <h2 className="mb-0">{summaryData.studentsAccepted}</h2>
                  </div>
                  <div className="align-self-center">
                    <i className="fa-solid fa-check-circle fa-2x"></i>
                  </div>
                </div>
                <Link to="/students" className="text-white text-decoration-none mt-2">
                  View Accepted <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card bg-danger text-white h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="card-title">Students Rejected</h6>
                    <h2 className="mb-0">{summaryData.studentsRejected}</h2>
                  </div>
                  <div className="align-self-center">
                    <i className="fa-solid fa-times-circle fa-2x"></i>
                  </div>
                </div>
                <Link to="/students" className="text-white text-decoration-none mt-2">
                  View Rejected <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

       
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="fa-solid fa-bolt me-2"></i> Quick Actions
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <Link to="/faculty-admin" className="btn btn-info w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                      <i className="fa-solid fa-chalkboard-user fa-2x mb-2"></i>
                      <span>Manage Faculty</span>
                    </Link>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Link to="/students" className="btn btn-success w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                      <i className="fa-solid fa-users fa-2x mb-2"></i>
                      <span>Manage Students</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="fa-solid fa-clock-rotate-left me-2"></i> Recent Activity
                </h5>
              </div>
              <div className="card-body">
                {recentActivity.length ? (
                  <div className="list-group list-group-flush">
                    {recentActivity.map((act, idx) => (
                      <div key={idx} className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">{act.message}</h6>
                          <small>{new Date(act.time).toLocaleString()}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted mb-0">No recent activity</p>
                )}
              </div>
            </div>
          </div>

         
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="fa-solid fa-bell me-2"></i> Date And Time
                </h5>
              </div>
              <div className="card-body text-center">
                <div className="p-4 rounded text-white mb-3"
                     style={{ background: "linear-gradient(to bottom, #17a2b8, #138496)" }}>
                  <h3 className="fw-bold mb-1">{currentTime.toLocaleTimeString()}</h3>
                  <h6 className="fw-light">{currentTime.toDateString()}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdmissionModal />
    </>
  );
};

export default Dashboard;
