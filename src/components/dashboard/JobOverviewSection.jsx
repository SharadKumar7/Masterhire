import React from 'react';
import { Plus } from 'lucide-react';

const JobOverviewSection = () => {
    // A placeholder function where you would integrate backend logic
    const handlePostJob = () => {
        alert("Navigating to job posting page...");
        // In a real app, you would use: navigate('/post-a-job');
    };

    return (
        <section>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back, Bijoy</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Job overview</h2>
                <div className="text-center py-10 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                    <p className="text-gray-500 mb-4">You have no active jobs right now.</p>
                    <button 
                        onClick={handlePostJob}
                        className="flex items-center justify-center mx-auto bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Post a job
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JobOverviewSection;
