import React from 'react';

const ProfileCard = ({ profile, actionButtonText }) => {
    const handleAction = () => {
        alert(`Action for ${profile.name} (e.g., Book consultation, View profile)`);
        // Real logic goes here
    };
    
    return (
        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
                <img src={profile.image} alt={profile.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                    <h3 className="font-semibold text-gray-800">{profile.name}</h3>
                    <p className="text-xs text-gray-500">{profile.location}</p>
                </div>
            </div>
            
            <div className="flex justify-between items-center text-sm mb-4">
                <span className="text-teal-600 font-bold">{profile.successRate}</span>
                <span className="text-gray-500">{profile.jobsDone} jobs</span>
            </div>

            <p className="text-sm text-gray-600 mb-4">{profile.expertise}</p>
            <p className="text-xs text-gray-400 mb-5">Description</p>
            
            {actionButtonText && (
                <button 
                    onClick={handleAction}
                    className="w-full bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 py-2 rounded-lg text-sm font-medium transition duration-150"
                >
                    {actionButtonText}
                </button>
            )}
        </div>
    );
};

export default ProfileCard;
