
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  const location = useLocation();

  return isAdminLoggedIn ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;