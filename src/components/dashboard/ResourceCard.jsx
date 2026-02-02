import React from 'react';

const ResourceCard = ({ resource }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <div className={`flex-shrink-0 w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center text-2xl`}>
                {resource.icon}
            </div>
            <div>
                <h4 className="font-semibold text-gray-800 mb-1">{resource.title}</h4>
                <p className="text-sm text-gray-500">{resource.description}</p>
            </div>
        </div>
    );
};

export default ResourceCard;
