import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; 

const ClientSignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-lg">
        {/* Header/Logo Section */}
       <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

        <main>
            <h2 className="text-lg font-semibold mb-8 text-gray-800 text-center">
          Sign up to hire talent
        </h2>
          {/* Google Sign-in Button */}
          <button className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out mb-6">
            {/* Google Icon Placeholder - You'll need an actual SVG/Image here */}
            <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.27 5.48-4.78 7.18l7.73 6c4.51-4.18 7.11-10.5 7.11-18.5z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.84l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Continue with Google
          </button>

          {/* OR separator */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form Fields */}
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Business email address</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password (8 or more characters)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Country Field */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select id="country" className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-teal-500 focus:border-teal-500 appearance-none">
                <option>Select Country</option>
                <option value="India">India</option>
                {/* Add more countries here */}
              </select>
            </div>

            {/* Terms and Policy Checkbox */}
            <div className="flex items-start">
              <input type="checkbox" id="terms" className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-1" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                Yes, I understand and agree to the MasterHire{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Privacy Policy</a>.
              </label>
            </div>

            {/* Create Account Button */}
            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
              Log In
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientSignupForm;
