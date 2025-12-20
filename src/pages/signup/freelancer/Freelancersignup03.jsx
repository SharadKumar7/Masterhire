import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const domainData = {
  'Accounting & Consulting': [
    'Personal & Professional Coaching',
    'Accounting & Book-keeping',
    'Financial Planning',
    'Recruiting & Human Resources',
    'Management Consulting',
    'Other - Accounting & Consulting',
  ],
  'Admin Support': [
    'Data Entry & Transcription Services',
    'Virtual Assistance',
    'Project Management',
    'Market Research & Product Reviews',
  ],
  'Data Science & Analytics': [
    'Data Analysis & Reporting',
    'Data Extraction/ETL',
    'Data Mining & Management',
    'AI & Machine Learning',
  ],
  'Design & Creativity': [
    'Art & Illustration',
    'Branding & Logo Design',
    'NFT, AR/VR & Game Art',
    'Graphic, Editorial & Presentation Design',
    'Photography',
    'Product Design',
    'Video & Animation',
  ],
  'IT & Networking': [
    'Database Management & Administration',
    'ERP/CRM Software',
    'Information Security & Compliance',
    'Network & System Administration',
    'DevOps & Solution Architecture',
  ],
  'Sales Marketing': [
    'Digital Marketing',
    'Lead Generation & Telemarketing',
    'Marketing, PR & Brand Strategy',
  ],
  'Web, Mobile & Software Dev': [
    'Blockchain, NFT & Cryptocurrency',
    'AI Apps & Integration',
    'Desktop Application Development',
    'Ecommerce Development',
    'Game Design & Development',
    'Mobile Development',
    'Other-Software Development',
    'QA Testing',
    'Web & Mobile Design',
    'Web Development',
  ],
};

const MasterHireDomainSelectionCorrected = () => {
  const categories = Object.keys(domainData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default to the first category
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);


  const availableSpecialities = useMemo(() => {
    return domainData[selectedCategory] || [];
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSpecialities([]);
  };

  const handleSpecialityChange = (e) => {
    const value = e.target.value;
    setSelectedSpecialities(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else if (prev.length < 3) {
        return [...prev, value];
      }
      return prev;
    });
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/skills'); 
  };

  const handleBack = () => {
    navigate('/details'); 
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white p-8">
        {/* Header/Logo Section */}
       <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

        <main>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Select your professional domain -
          </h2>
          <p className="text-gray-600 mb-10">
            Choose the domain that best represents your expertise, then select up to three specializations you actively work in.
          </p>

          {/* Selection Area Container */}
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            
            {/* Left Column: Categories */}
            <div className="w-1/2 p-6 bg-gray-50 border-r border-gray-200">
              <h3 className="text-sm font-semibold mb-4 text-gray-800">Select Category</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`p-3 rounded-lg cursor-pointer transition duration-150 ease-in-out ${
                      selectedCategory === category
                        ? 'bg-teal-100 text-teal-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Specialities (Dynamically Filtered) */}
            <div className="w-1/2 p-6 bg-white">
              <h3 className="text-sm font-semibold mb-4 text-gray-800">
                Choose 1 to 3 specialities
              </h3>
              <div className="space-y-4">
                {availableSpecialities.map((speciality) => ( // Use availableSpecialities
                  <label key={speciality} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={speciality}
                      checked={selectedSpecialities.includes(speciality)}
                      onChange={handleSpecialityChange}
                      className="form-checkbox h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <span className="ml-3 text-gray-700">{speciality}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
            <button 
            onClick={handleBack}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-12 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out">
              Back
            </button>
            <button 
            onClick={handleNext}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out">
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MasterHireDomainSelectionCorrected;

