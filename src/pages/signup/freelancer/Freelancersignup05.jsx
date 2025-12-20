import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterHireTitleBioForm = () => {
  const [bio, setBio] = useState('');
  const MIN_WORDS = 50;

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const wordCount = countWords(bio);

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/experience'); 
  };

  const handleBack = () => {
    navigate('/skills'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      {/* Header/Logo Section */}
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      {/* Main Content Area (Centered in the viewport) */}
      <main className="w-full max-w-2xl mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Title & Bio
        </h2>
        <p className="text-gray-600 mb-8">
          Add a clear professional title and a well-written bio that explains who you are, what you specialize in, and the value you bring to clients.
        </p>

        <form className="space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Bio Field (Textarea) */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Your Bio</label>
            <textarea
              id="bio"
              rows={6} // Adjust height visually
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            <p className={`text-right text-sm mt-1 ${wordCount < MIN_WORDS ? 'text-gray-500' : 'text-teal-600'}`}>
              Min {MIN_WORDS} words ({wordCount} words currently)
            </p>
          </div>
        </form>
      </main>

      {/* Navigation Buttons (Fixed to the bottom of the viewport) */}
      <footer className="w-full max-w-2xl mx-auto flex justify-between pt-6 pb-4">
        <button
          type="button"
          onClick={handleBack}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-16 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={handleNext}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-16 rounded-lg shadow-md transition duration-150 ease-in-out"
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default MasterHireTitleBioForm;
