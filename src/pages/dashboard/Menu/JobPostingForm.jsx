import React from 'react';
import SectionContainer from '../../../components/dashboard/Menu/SectionContainer'

const JobPostingForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4"> 
    <div className="w-full max-w-4xl space-y-6">
      <SectionContainer title="Job title">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600">
              Write a clear, specific job title that describes what you want to get done.
            </p>
            <p className="text-gray-600">
              A good title helps the right freelancers understand your project quickly and respond with relevant proposals.
            </p>
            <p className="text-sm font-semibold text-gray-800">Example:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Build a Professional WordPress Website for My Business</li>
              <li>Develop a Custom Web Application Using Laravel</li>
              <li>Design and Build a Responsive Landing Page</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <label htmlFor="job-title-input" className="block text-sm font-medium text-gray-700 mb-2">Job title</label>
            <input
              type="text"
              id="job-title-input"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
              placeholder="e.g. Need a Shopify expert"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer title="Skills">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600">
              List the specific skills your project requires.
            </p>
            <p className="text-gray-600">
              Adding the right skills helps freelancers understand your expectations and ensures you receive proposals from people with relevant experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <label htmlFor="skills-input" className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
            {/* Using a textarea to simulate a multi-line input as shown in the image design */}
            <textarea
              id="skills-input"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
              placeholder="e.g. React, Tailwind CSS, JavaScript"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer title="Job description" initiallyOpen={true}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600">
              Clearly describe what you need done, including the project scope, key requirements, and expected outcomes.
            </p>
            <p className="text-sm font-semibold text-gray-800 mt-4">Talents are looking for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Clear expectations about what needs to be done and the final deliverables</li>
              <li>Specific requirements or features you want included in the project</li>
              <li>Relevant skills or experience needed to complete the work</li>
              <li>How you prefer to work, such as communication style, availability, or milestones</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <label htmlFor="description-input" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              id="description-input"
              rows={8}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border"
              placeholder="Describe your project here..."
            />
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                {/* Placeholder for an attachment icon */}
                <svg xmlns="http://www.w3.org" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                </svg>
                Attach files
              </button>
              <span>pdf, doc, zip (max 10 MB)</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
    </div>
  );
};

export default JobPostingForm;
