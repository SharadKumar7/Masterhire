import React, { useState } from 'react'; 
import { useNavigate ,Link} from 'react-router-dom'; 
import { User, Briefcase } from 'lucide-react'; 

const RoleSelection = () => {
  
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
      <header className="absolute top-4 left-4">
        <h1 className="font-jaro text-3xl text-gray-800">MasterHire</h1>
      </header>

      <main className="text-center">
        <h2 className="text-lg font-semibold mb-8 text-gray-800">
          Join as a Client or Freelancer
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center">
          <label
            htmlFor="client-select"
            className={`flex items-center p-6 border rounded-lg shadow-sm cursor-pointer transition duration-150 ease-in-out w-80 bg-white ${
              selection === 'client' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-gray-300 hover:border-teal-500'
            }`}
          >
            <input
              type="radio"
              id="client-select"
              name="accountType"
              className="form-radio h-8 w-8 accent-teal-600 border-gray-300 focus:ring-teal-500 mr-4"
              checked={selection === 'client'}
              onChange={() => setSelection('client')}
            />
            <div className="flex items-center">
              <User className="w-10 h-10 text-gray-500 mr-3" />
              <span className="text-gray-700">I'm a Client, hiring for a project</span>
            </div>
          </label>

          <label
            htmlFor="freelancer-select"
            className={`flex items-center p-6 border rounded-lg shadow-sm cursor-pointer transition duration-150 ease-in-out w-80 bg-white ${
              selection === 'freelancer' ? 'border-teal-500 ring-1 ring-teal-500' : 'border-gray-300 hover:border-teal-500'
            }`}
          >
            <input
              type="radio"
              id="freelancer-select"
              name="accountType"
              className="form-radio h-8 w-8 accent-teal-600 border-gray-300 focus:ring-teal-500 mr-4"
              checked={selection === 'freelancer'}
              onChange={() => setSelection('freelancer')}
            />
            <div className="flex items-center">
              <Briefcase className="w-10 h-10 text-gray-500 mr-3" />
              <span className="text-gray-700">I'm a Freelancer, looking for work</span>
            </div>
          </label>
        </div>

        <button 
          onClick={handleJoin}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out"
        >
          Join as a {selection === 'client' ? 'Client' : 'Freelancer'}
        </button>

        <div className="mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-600 hover:text-teal-700 font-semibold">
            Log In
          </Link>
        </div>
      </main>
    </div>
  );
};

export default RoleSelection;
