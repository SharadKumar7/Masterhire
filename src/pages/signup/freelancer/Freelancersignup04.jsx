import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const MasterHireSkillSelection = () => {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const MAX_SKILLS = 10;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      const newSkill = inputValue.trim();

      if (skills.length < MAX_SKILLS && !skills.includes(newSkill)) {
        setSkills([...skills, newSkill]);
        setInputValue('');
      }
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/bio'); 
  };

  const handleBack = () => {
    navigate('/domain'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      {/* Header/Logo Section */}
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      <main className="w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Add your skills -
        </h2>
        <p className="text-gray-600 mb-8">
          Add the specific skills you actively use in your work so clients can understand what you truly offer.
        </p>

        <form className="space-y-6" onSubmit={handleNext}>
          {/* Input Box Section */}
          <div>
            <input
              type="text"
              placeholder="Enter skills here (e.g. React, UI Design)"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              disabled={skills.length >= MAX_SKILLS}
            />
            <div className="flex justify-between mt-2">
               <p className="text-xs text-gray-400 italic">Press "Enter" to add a skill</p>
               <p className="text-sm text-gray-500">
                 {skills.length}/{MAX_SKILLS} skills
               </p>
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Your skills</label>
            <div className="min-h-[120px] p-4 border border-gray-300 rounded-xl bg-gray-50/50 flex flex-wrap gap-2 content-start">
              {skills.length === 0 && (
                <span className="text-gray-400 text-sm italic">No skills added yet...</span>
              )}
              {skills.map((skill) => (
                <div
                  key={skill}
                  
                  className="inline-flex items-center bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1.5 rounded-md font-medium text-sm w-fit transition-all hover:bg-teal-100"
                >
                  <span className="truncate max-w-[150px]">{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 p-0.5 rounded-full hover:bg-teal-200 text-teal-600 transition-colors"
                    aria-label={`Remove ${skill}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleBack}
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-10 border border-gray-300 rounded-lg transition-all"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              Next
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MasterHireSkillSelection;
