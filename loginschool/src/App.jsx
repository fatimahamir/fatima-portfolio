import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import FacultyManagement from './pages/FacultyManagement';
import StudentManagement from './pages/StudentManagement';

import HomePage from './pages/Home';
import CoursePage from './pages/Course';
import ContactPage from './pages/Contact';
import FacultyPublic from './pages/Faculty';
import Admission from './pages/Admission';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faculty" element={<FacultyPublic />} />
        <Route path="/admission" element={<Admission />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/faculty-admin"
          element={
            <ProtectedRoute>
              <FacultyManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
