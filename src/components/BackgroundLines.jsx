import React from 'react';

const BackgroundLines = () => {
  return (
    <div
      className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
      style={{ 
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="w-100 h-100"
      >
        <path 
          d="M0 400 Q300 350 600 400 T1200 400" 
          stroke="rgba(255,133,187,0.2)" 
          strokeWidth="2" 
          fill="none" 
        />
        <path 
          d="M0 500 Q400 450 800 500 T1200 480" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="2" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

export default BackgroundLines;