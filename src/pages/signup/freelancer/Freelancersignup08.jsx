import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2, ChevronDown } from 'lucide-react';

const MasterHireLanguageSelection = () => {
  const [languages, setLanguages] = useState([
    { id: 1, language: 'English', proficiency: 'Select Level', isDefault: true },
  ]);
  const [availableLanguages, setAvailableLanguages] = useState(['Spanish', 'French', 'German', 'Hindi']); // Example list

  const addLanguageRow = () => {
    if (languages.length < 5) { 
        setLanguages([...languages, { id: Date.now(), language: 'Choose Language', proficiency: 'Select Level', isDefault: false }]);
    }
  };

  const removeLanguageRow = (id) => {
    setLanguages(languages.filter(lang => lang.id !== id));
  };

  const handleProficiencyChange = (id, value) => {
    setLanguages(languages.map(lang => lang.id === id ? { ...lang, proficiency: value } : lang));
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/education'); 
  };

  const handleNext = () => {
    navigate('/ratepage'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      {/* Header/Logo Section */}
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Language
        </h2>
        <p className="text-gray-600 mb-8">
          Strong language skills enable clear communication with clients. English is mandatory. Include any additional languages you are proficient in.
        </p>

        {/* Language Selection Grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <h3 className="text-sm font-medium text-gray-700">Language</h3>
            <h3 className="text-sm font-medium text-gray-700">Proficiency</h3>
          </div>

          {languages.map((lang) => (
            <div key={lang.id} className="grid grid-cols-2 gap-8 items-center">
              <div className="relative">
                <select
                  value={lang.language}
                  disabled={lang.isDefault}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-teal-500 focus:border-teal-500 ${lang.isDefault ? 'text-gray-500 cursor-not-allowed' : 'text-gray-800'}`}
                >
                  {lang.isDefault ? (
                    <option value="English">English (default for all profiles)</option>
                  ) : (
                    <>
                        <option value="Choose Language">Choose Language</option>
                        {availableLanguages.map(al => <option key={al} value={al}>{al}</option>)}
                    </>
                  )}
                </select>
                {!lang.isDefault && <ChevronDown className="absolute inset-y-0 right-0 pr-3 flex items-center h-full w-5 text-gray-400 pointer-events-none" />}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative flex-grow">
                    <select
                        value={lang.proficiency}
                        onChange={(e) => handleProficiencyChange(lang.id, e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-teal-500 focus:border-teal-500"
                    >
                        <option>Select Level</option>
                        <option value="Basic">Basic</option>
                        <option value="Conversational">Conversational</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Native/Bilingual">Native/Bilingual</option>
                    </select>
                    <ChevronDown className="absolute inset-y-0 right-0 pr-3 flex items-center h-full w-5 text-gray-400 pointer-events-none" />
                </div>
                
                {!lang.isDefault && (
                  <button
                    type="button"
                    onClick={() => removeLanguageRow(lang.id)}
                    className="text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition duration-150"
                    aria-label="Remove language"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Language Button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={addLanguageRow}
            className="flex items-center justify-center w-full md:w-56 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            <Plus className="w-5 h-5 mr-3" />
            Add Language
          </button>
        </div>
      </main>

      {/* Navigation Buttons */}
      <footer className="w-full max-w-3xl mx-auto flex justify-between pt-6 pb-4">
        <button
          type="button"
          onClick={handleBack}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-12 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={handleNext}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out"
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default MasterHireLanguageSelection;

