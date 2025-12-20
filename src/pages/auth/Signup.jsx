import React, { useState } from 'react'; 
import { useNavigate ,Link} from 'react-router-dom'; 
import { User, Briefcase } from 'lucide-react'; 

const MasterHireSelection = () => {
  
  const navigate = useNavigate();
  
  
  const [selection, setSelection] = useState('client');

  
  const handleJoin = () => {
    if (selection === 'client') {
      navigate('/clientsignup');
    } else {
      navigate('/freelancersignup');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      {/* Header/Logo Section */}
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      {/* Main Content Area */}
      <main className="text-center">
        <h2 className="text-lg font-semibold mb-8 text-gray-800">
          Join as a Client or Freelancer
        </h2>

        {/* Selection Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center">
          {/* Client Card */}
          <label
            htmlFor="client-select"
            className={`flex items-center p-6 border rounded-lg shadow-sm cursor-pointer transition duration-150 ease-in-out w-80 bg-white ${
              selection === 'client' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-gray-300 hover:border-blue-500'
            }`}
          >
            <input
              type="radio"
              id="client-select"
              name="accountType"
              className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-4"
              checked={selection === 'client'}
              onChange={() => setSelection('client')}
            />
            <div className="flex items-center">
              <User className="w-6 h-6 text-gray-500 mr-3" />
              <span className="text-gray-700">I'm a Client, hiring for a project</span>
            </div>
          </label>

          {/* Freelancer Card */}
          <label
            htmlFor="freelancer-select"
            className={`flex items-center p-6 border rounded-lg shadow-sm cursor-pointer transition duration-150 ease-in-out w-80 bg-white ${
              selection === 'freelancer' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-gray-300 hover:border-blue-500'
            }`}
          >
            <input
              type="radio"
              id="freelancer-select"
              name="accountType"
              className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-4"
              checked={selection === 'freelancer'}
              onChange={() => setSelection('freelancer')}
            />
            <div className="flex items-center">
              <Briefcase className="w-6 h-6 text-gray-500 mr-3" />
              <span className="text-gray-700">I'm a Freelancer, looking for work</span>
            </div>
          </label>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleJoin}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out"
        >
          Join as a {selection === 'client' ? 'Client' : 'Freelancer'}
        </button>

        {/* Login Link */}
        <div className="mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
            Log In
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MasterHireSelection;
