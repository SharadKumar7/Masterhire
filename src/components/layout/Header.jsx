import React from 'react';
import { Link } from 'react-router-dom'; 

const MasterHireNav = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-20 py-5 bg-nav-bg-dark backdrop-blur-md sticky top-0 z-1000">
      <div className="flex items-center gap-6 md:gap-12 flex-1">
        {/* Logo with Gradient Text */}
        <div 
          className="text-3xl font-jaro whitespace-nowrap cursor-pointer"
          // Using Link component for home navigation
          onClick={() => window.location.href = '/'} 
          style={{ background: 'linear-gradient(135deg, #00d4ff, #00ffaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          MasterHire
        </div>
        
        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 list-none m-0 items-center">
          {/* Note: Using <a> tags as provided by user for external or placeholder links */}
          <li><a href="#" className="text-white text-sm flex items-center gap-1 hover:text-accent-teal transition-colors whitespace-nowrap">Find Talent <span className="dropdown-arrow">▼</span></a></li>
          <li><a href="#" className="text-white text-sm flex items-center gap-1 hover:text-accent-teal transition-colors whitespace-nowrap">Find Work <span className="dropdown-arrow">▼</span></a></li>
          {/* Using Link for About Us page */}
          <li><Link to="/about" className="text-white text-sm hover:text-accent-teal transition-colors whitespace-nowrap">About Us</Link></li>
        </ul>
      </div>

      {/* Nav Right (Buttons) */}
      <div className="flex gap-3 md:gap-5 items-center">
        {/* Using Link for Log In page */}
        <Link to="/login" className="text-white text-sm px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all hover:bg-teal-900/20 whitespace-nowrap">Log In</Link>
        
        {/* Using Link for Sign Up page */}
        <Link 
          to="/signup" 
          className="text-dark-bg-start text-sm px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
          style={{ background: 'linear-gradient(135deg, #00d4ff, #00ffaa)', boxShadow: '0 5px 20px rgba(0, 255, 170, 0.3)' }}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default MasterHireNav;
