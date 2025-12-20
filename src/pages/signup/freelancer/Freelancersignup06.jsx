import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

// --- Modal Component ---
const ExperienceModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Add Experience</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input type="text" id="company" name="company" onChange={handleChange} required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
              <input type="date" id="startDate" name="startDate" onChange={handleChange} required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
            </div>
            <div className="w-1/2">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
              <input type="date" id="endDate" name="endDate" onChange={handleChange} disabled={formData.current} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="current" name="current" checked={formData.current} onChange={handleChange} className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" />
            <label htmlFor="current" className="ml-2 block text-sm text-gray-900">I currently work here</label>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
            <textarea id="description" name="description" rows={3} onChange={handleChange} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div className="flex justify-end pt-4">
            <button type="button" onClick={onClose} className="mr-3 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const MasterHireWorkExperiencePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experiences, setExperiences] = useState([]);
  
  
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/education'); 
  };

  const handleBack = () => {
    navigate('/bio'); 
  };

  const addExperienceHandler = (newExp) => {
    setExperiences([...experiences, newExp]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      <main className="w-full max-w-2xl mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Work Experience</h2>
        <p className="text-gray-600 mb-8">
          List your professional experience, including roles, responsibilities, and outcomes that demonstrate your expertise.
        </p>

        <h3 className="text-lg font-semibold mb-4 text-gray-800">Work Experience</h3>

        <div className="border border-gray-200 rounded-lg p-6 min-h-[300px]">
          {experiences.length === 0 ? (
            <div className="flex justify-center items-center h-full">
               <p className="text-gray-500">No experience added yet.</p>
            </div>
          ) : (
             <ul className="space-y-4">
                {experiences.map((exp, index) => (
                    <li key={index} className="p-4 border border-gray-100 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-gray-800">{exp.title} at {exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                        {exp.description && <p className="mt-2 text-sm text-gray-600">{exp.description}</p>}
                    </li>
                ))}
             </ul>
          )}
        </div>

        <div className="mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 border border-dashed border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition duration-150 ease-in-out"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Work Experience
          </button>
        </div>
      </main>

      {/* Navigation Buttons */}
      <footer className="w-full max-w-2xl mx-auto flex justify-between items-center pt-6 pb-4">
        <button
          type="button"
          onClick={handleBack} 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-12 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out"
        >
          Back
        </button>
        <div className="flex items-center">
            <button 
              type="button" 
              onClick={handleNext} 
              className="text-sm text-gray-500 hover:text-gray-700 mr-4 cursor-pointer"
            >
              (Skip for now)
            </button>
            <button
              type="button" 
              onClick={handleNext}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out"
            >
              Next
            </button>
        </div>
      </footer>

      {isModalOpen && <ExperienceModal onClose={() => setIsModalOpen(false)} onSave={addExperienceHandler} />}
    </div>
  );
};

export default MasterHireWorkExperiencePage;
