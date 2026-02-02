import { Link } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside to improve UX
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left m-2" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        {label}
      </button>

      <button 
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
    >
      <span>Options</span>
      
      {/* Animated Arrow Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1">
            {options.map((opt, index) => (
              <Link
                to={'/demo'}
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => { console.log(opt); setIsOpen(false); }}
              >
                {opt}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const menuData = [
    { label: 'File', options: ['New', 'Open', 'Save'] },
    { label: 'Edit', options: ['Undo', 'Redo', 'Cut'] },
    { label: 'View', options: ['Zoom In', 'Zoom Out', 'Full Screen'] },
  ];

  return (
    <div className="p-10 flex">
      {menuData.map((menu, i) => (
        <Dropdown key={i} label={menu.label} options={menu.options} />
      ))}
    </div>
  );
}
