import React from 'react';
import { Mail, Lock, LogIn as LogInIcon } from 'lucide-react'; // Icons for email and password
import { useNavigate, Link } from 'react-router-dom'; // For navigation logic

const MasterHireLoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for handling the login submission goes here
    console.log("Logging in...");
    // Example navigation after login:
    // navigate('/dashboard');
  };

  const handleGoogleSignIn = () => {
    // Logic for Google OAuth sign-in goes here
    console.log("Signing in with Google...");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      {/* Header/Logo Section (Top Left) */}
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      {/* Main Content Area (Centered Form) */}
      <main className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-gray-600">Welcome Back</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            Login To MasterHire
          </h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email or Username Input */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-150 ease-in-out flex items-center justify-center"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
            Forgot Password?
          </Link>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

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

        {/* Sign Up Link */}
        <div className="mt-8 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-semibold">
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MasterHireLoginPage;
