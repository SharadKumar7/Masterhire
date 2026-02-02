import React, { useState } from 'react';

const SectionContainer = ({ title, children, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Header Bar (Dark Gray) */}
      <div className="bg-gray-700 p-4 text-white flex justify-between items-center cursor-pointer">
        <h2 className="text-lg font-semibold">{title}</h2>
        {/* Top chevron/arrow (Always points up or down slightly) */}
        <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
            xmlns="http://www.w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Collapsible Content Area */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {/* Inner Header Bar (Light Gray) */}
        <div className="bg-gray-100 p-4 text-gray-800 flex justify-between items-center border-b border-gray-200">
            <h3 className="font-semibold">{title}</h3>
            {/* Inner chevron/arrow */}
            <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={`section-content-${title}`}>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
                xmlns="http://www.w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
        </div>
        
        <div id={`section-content-${title}`} className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
