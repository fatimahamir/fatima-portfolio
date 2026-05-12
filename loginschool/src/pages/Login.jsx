
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdmissionModal from '../modals/AdmissionModal';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 500));

  
    if (username === 'admin' && password === 'admin427') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try admin / admin123');
    }
    
    setIsLoading(false);
  };

  return (
    <>
   
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{ 
           background: '',
           paddingTop: '80px' 
         }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-warning text-white text-center py-4">
                <h3 className="mb-0 text-dark">
                  
                  Admin Login
                </h3>
                <small className="text-light">Jinnah Officers School</small>
              </div>
              <div className="card-body p-4">
                {error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="fa-solid fa-exclamation-triangle me-2"></i>
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                  </div>
                )}
                
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      <i className="fa-solid fa-user me-1"></i>
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter admin username"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      <i className="fa-solid fa-key me-1"></i>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      required
                    />
                  </div>
                  
                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-warning btn-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                         
                          Signing in...
                        </>
                      ) : (
                        <>
                         
                          Login
                        </>
                      )}
                    </button>
                  </div>
                </form>
                
                <div className="text-center mt-4">
                  <small className="text-muted">
                    <i className="fa-solid fa-info-circle me-1"></i>
                    Default credentials: admin / admin123
                  </small>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <button 
                className="btn btn-link text-white"
                onClick={() => navigate('/')}
              >
                <i className="fa-solid fa-arrow-left me-1"></i>
                Back to School Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <AdmissionModal />
     </>
  );
};

export default Login;