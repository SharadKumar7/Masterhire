import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X, AlertCircle ,  Trash2 } from 'lucide-react';
import { useSignup } from '../../../context/SignupContext'; 
import Loader from '../../common/Loader'; 

const ExperienceModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validateAndSave = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.title) newErrors.title = true;
    if (!formData.company) newErrors.company = true;
    if (!formData.startDate) newErrors.startDate = true;
    if (!formData.current && !formData.endDate) newErrors.endDate = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
            <form onSubmit={validateAndSave} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" id="title" name="title" onChange={handleChange} required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 outline-none" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <input type="text" id="company" name="company" onChange={handleChange} required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 outline-none" />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input type="date" id="startDate" name="startDate" onChange={handleChange} required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 outline-none" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                  <input type="date" id="endDate" name="endDate" onChange={handleChange} disabled={formData.current} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 outline-none" />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="current" name="current" checked={formData.current} onChange={handleChange} className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 outline-none" />
                <label htmlFor="current" className="ml-2 block text-sm text-gray-900">I currently work here</label>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
                <textarea id="description" name="description" rows={3} onChange={handleChange} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 outline-none" />
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
const WorkExperiencePage = () => {
  const navigate = useNavigate();
  const { signupData, updateSignupData, progress, startLoading, stopLoading } = useSignup();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experiences, setExperiences] = useState(signupData.workExperience || []);
  const [showError, setShowError] = useState(false);

  // Inside WorkExperiencePage
const addExperienceHandler = (newExp) => {
  // Assign a unique ID so the remover knows which one to delete
  const experienceWithId = { ...newExp, id: Date.now() }; 
  const updatedList = [...experiences, experienceWithId];
  
  setExperiences(updatedList);
  updateSignupData({ workExperience: updatedList }); 
  setShowError(false);
};


  const performNavigation = async () => {
    startLoading();
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ experiences }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      if (response.ok) {
        await stopLoading(); 
        navigate('/education'); 
      } else {
        await stopLoading();
        alert("Server error. Please try again.");
      }
    } catch (err) {
      await stopLoading();
      alert("Network error. Check your connection.");
    }
  };

  const handleNext = async () => {
    if (experiences.length === 0) {
      setShowError(true); 
      return;
    }
    await performNavigation();
  };

  const handleSkip = async () => {
    startLoading();
    await stopLoading();
    navigate('/education');
  };

  const handleBack = async () => {
    startLoading();
    await stopLoading();
    navigate('/bio');
  };

  const removeExperienceHandler = (id) => {
  const updatedList = experiences.filter(exp => exp.id !== id);
  setExperiences(updatedList);
  // CRITICAL: Update your global signup data too
  updateSignupData({ workExperience: updatedList }); 
};


  return (
    <>
      <Loader progress={progress} />
      <div className="min-h-screen bg-white flex flex-col justify-between p-4">
        <header className="absolute top-4 left-4">
          <h1 className="text-3xl font-jaro text-gray-800">MasterHire</h1>
        </header>

        <main className="w-full max-w-2xl mx-auto mt-20">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Work Experience</h2>
          <p className="text-gray-600 mb-8">List your professional experience, including roles, responsibilities, and outcomes that demonstrate your expertise.</p>

          <div className={`border rounded-lg p-6 h-[300px] overflow-y-auto scroll-smooth transition-colors ${showError ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
            {experiences.length === 0 ? (
              <div className="flex flex-col justify-center items-center h-full gap-2">
                 <p className="text-gray-500 ">No experience added yet.</p>
                 {showError && (
                    <div className="flex items-center gap-1 text-red-500">
                        <AlertCircle className="w-4 h-4" />
                        <p className="text-sm font-medium">At least one experience is required to click Next.</p>
                    </div>
                 )}
              </div>
            ) : (
               <ul className="space-y-4">
                  {experiences.map((exp) => (
                      <li key={exp.id} className="relative p-4 border border-teal-100 bg-teal-50/30 rounded-lg">

                        <div className="absolute top-2 right-2 flex space-x-2">
                                                    {/* You could add an edit button here later */}
                                                    <button onClick={() => removeExperienceHandler(exp.id)} className="text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100 transition">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>


                          <p className="font-semibold text-gray-800">{exp.title} at {exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                          {exp.description && <p className="mt-2 text-sm text-gray-600">{exp.description}</p>}
                      </li>
                  ))}
               </ul>
            )}
          </div>

          <div className="mt-8">
            <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center w-full md:w-auto px-6 py-3 border border-dashed border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition">
              <Plus className="w-5 h-5 mr-2" /> Add Work Experience
            </button>
          </div>
        </main>

        <footer className="w-full max-w-2xl mx-auto flex justify-between items-center pt-6 pb-4">
          <button
          type="button"
          onClick={handleBack} 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-12 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out"
        >
          Back
        </button>
          <div className="flex items-center gap-6">
              <button onClick={handleSkip} className="text-teal-600 hover:text-teal-700 font-medium">Skip for now</button>
              <button onClick={handleNext} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition">Next</button>
          </div>
        </footer>

        {isModalOpen && <ExperienceModal onClose={() => setIsModalOpen(false)} onSave={addExperienceHandler} />}
      </div>
    </>
  );
};

export default WorkExperiencePage;
