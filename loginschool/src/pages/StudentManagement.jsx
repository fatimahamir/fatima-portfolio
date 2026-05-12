
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdmissionModal from '../modals/AdmissionModal';
const StudentManagement = () => {
  
  const initialStudents = [
    {
      id: 1,
      fullName: 'Alice Johnson',
      dob: '2015-05-15',
      gender: 'female',
      fatherName: 'Robert Johnson',
      motherName: 'Sarah Johnson',
      phone: '+1234567890',
      grade: 'class-1-5',
      address: '123 Main St, City',
      dateApplied: '2025-01-15',
      status: 'Applied',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      fullName: 'Bob Smith',
      dob: '2014-08-20',
      gender: 'male',
      fatherName: 'John Smith',
      motherName: 'Jane Smith',
      phone: '+1234567891',
      grade: 'class-6-8',
      address: '456 Oak Ave, City',
      dateApplied: '2025-01-14',
      status: 'Accepted',
      timestamp: new Date().toISOString()
    },
    {
      id: 3,
      fullName: 'Carol Davis',
      dob: '2016-03-10',
      gender: 'female',
      fatherName: 'Mike Davis',
      motherName: 'Lisa Davis',
      phone: '+1234567892',
      grade: 'pre-school',
      address: '789 Pine Rd, City',
      dateApplied: '2025-01-13',
      status: 'Rejected',
      timestamp: new Date().toISOString()
    }
  ];

  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('studentApplications');
    return savedStudents ? JSON.parse(savedStudents) : initialStudents;
  });

  const [filterStatus, setFilterStatus] = useState('All');
  const [editingStudent, setEditingStudent] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    fatherName: '',
    motherName: '',
    phone: '',
    grade: '',
    address: '',
    status: 'Applied'
  });

  useEffect(() => {
    localStorage.setItem('studentApplications', JSON.stringify(students));
  }, [students]);

  const filteredStudents = filterStatus === 'All' 
    ? students 
    : students.filter(s => s.status === filterStatus);

  const handleStatusChange = (id, newStatus) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, status: newStatus } : s
    ));
  };

  const handleEdit = (student) => {
    setFormData({
      fullName: student.fullName,
      dob: student.dob,
      gender: student.gender,
      fatherName: student.fatherName,
      motherName: student.motherName,
      phone: student.phone,
      grade: student.grade,
      address: student.address,
      status: student.status
    });
    setEditingStudent(student);
    setShowEditForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    setStudents(students.map(s => 
      s.id === editingStudent.id 
        ? { ...formData, id: editingStudent.id, dateApplied: s.dateApplied, timestamp: s.timestamp }
        : s
    ));
    
    setEditingStudent(null);
    setShowEditForm(false);
    setFormData({ fullName: '', dob: '', gender: '', fatherName: '', motherName: '', phone: '', grade: '', address: '', status: 'Applied' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const statusColors = {
    Applied: 'warning',
    Accepted: 'success',
    Rejected: 'danger'
  };

  const getGradeName = (grade) => {
    const gradeMap = {
      'pre-school': 'Pre School',
      'class-1-5': 'Class 1–5',
      'class-6-8': 'Class 6–8',
      'class-9-10': 'Class 9–10'
    };
    return gradeMap[grade] || grade;
  };

  const getGenderName = (gender) => {
    const genderMap = {
      'male': 'Male',
      'female': 'Female',
      'other': 'Other'
    };
    return genderMap[gender] || gender;
  };

  return (
    <>
    <div className="container-fluid" style={{ paddingTop: '80px' }}>
      <div className="row my-4">
        <div className="col-12">
          <h2 className="text-dark">
            
            Student  Management
          </h2>
          <p className="text-muted">Manage student applications and status</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h6 className="card-title">Applied</h6>
              <h2 className="mb-0">{students.filter(s => s.status === 'Applied').length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h6 className="card-title">Accepted</h6>
              <h2 className="mb-0">{students.filter(s => s.status === 'Accepted').length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h6 className="card-title">Rejected</h6>
              <h2 className="mb-0">{students.filter(s => s.status === 'Rejected').length}</h2>
            </div>
          </div>
        </div>
      </div>

     
      <div className="row mb-4">
        <div className="col-md-6">
          <select 
            className="form-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Applications</option>
            <option value="Applied">Applied</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="col-md-6">
          <button 
            className="btn btn-primary float-md-end"
            onClick={() => window.location.reload()}
          >
            <i className="fa-solid fa-sync me-2"></i>
            Refresh Data
          </button>
        </div>
      </div>

      {showEditForm && (
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  Edit Student Application
                </h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleUpdate}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select
                          className="form-control"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select
                          className="form-control"
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                        >
                          <option value="Applied">Applied</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Father's Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Mother's Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Grade</label>
                        <select
                          className="form-control"
                          name="grade"
                          value={formData.grade}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Grade</option>
                          <option value="pre-school">Pre School</option>
                          <option value="class-1-5">Class 1–5</option>
                          <option value="class-6-8">Class 6–8</option>
                          <option value="class-9-10">Class 9–10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="2"
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                      Update Application
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => {
                        setShowEditForm(false);
                        setEditingStudent(null);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

   
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Student Name</th>
                      <th>Grade</th>
                      <th>Phone</th>
                      <th>Applied Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>
                          <strong>{student.fullName}</strong><br/>
                          <small className="text-muted">
                            Father: {student.fatherName}, Mother: {student.motherName}
                          </small>
                        </td>
                        <td>{getGradeName(student.grade)}</td>
                        <td>{student.phone}</td>
                        <td>{student.dateApplied}</td>
                        <td>
                          <select
                            className={`form-select form-select-sm w-auto d-inline-block bg-${statusColors[student.status]}`}
                            value={student.status}
                            onChange={(e) => handleStatusChange(student.id, e.target.value)}
                          >
                            <option value="Applied">Applied</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() => handleEdit(student)}
                          >
                            <i className="fa-solid fa-edit"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(student.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredStudents.length === 0 && (
                      <tr>
                        <td colSpan="7" className="text-center">
                          No applications found for the selected status.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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

export default StudentManagement;