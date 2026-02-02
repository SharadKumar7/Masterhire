import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landingpage from "./pages/public/Landingpage";
import Login from "./pages/auth/LoginPage";
import About from "./pages/public/About";


import SelectionSignup from "./pages/auth/RoleSelectionPage";
import ClientSignup from "./pages/client/Clientsignup";
import ClientOtp from "./pages/client/clientOtpVerification";
import FreelancerSignupForm from "./pages/freelancer/Step01SignupLayout";
import FreelancerOtp from "./pages/freelancer/Step01OtpVerification";
import BasicDetailsForm from "./pages/freelancer/Step02BasicDetails";
import DomainSelection from "./pages/freelancer/Step03DomainSelection";
import SkillSelection from "./pages/freelancer/Step04SkillsSelection";
import TitleBioForm from "./pages/freelancer/Step05TitleBio";
import ExperiencePage from "./pages/freelancer/Step06WorkExperience";
import EducationPage from "./pages/freelancer/Step07Education";
import LanguageSelection from "./pages/freelancer/Step08LanguageSelection";
import HourlyRatePage from "./pages/freelancer/Step09HourlyRate";
import WelcomeMsge from "./pages/shared/Congratulations";
import Dashboard from "./pages/dashboard/DashboardPage";
import FrogetPassword from './pages/auth/ForgetPasswordPage';

import D from './hooks/Demo';
import J from './pages/dashboard/Menu/JobPostingForm';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* Step 1 */}
        <Route path="/signup" element={<SelectionSignup />} />
        <Route path="/clientsignup" element={<ClientSignup />} />
        <Route path="/clientotp" element={<ClientOtp />} />
        {/* Step 2: Sign up details */}
        <Route path="/freelancersignup" element={<FreelancerSignupForm />} />
        <Route path="/freelancerotp" element={<FreelancerOtp />} />
        {/* Step 3: Basic details (DOB, Address) */}
        <Route path="/details" element={<BasicDetailsForm />} />
        {/* Step 4: Domain Selection */}
        <Route path="/domain" element={<DomainSelection />} />
        {/* Step 5: Skill Selection */}
        <Route path="/skills" element={<SkillSelection />} />
        {/* Step 6: Title & Bio */}
        <Route path="/bio" element={<TitleBioForm />} />
        {/* Step 7: Work Experience */}
        <Route path="/experience" element={<ExperiencePage />} />
        {/* Step 8: Education */}
        <Route path="/education" element={<EducationPage />} />
        {/* Step 9: Languages */}
        <Route path="/languages" element={<LanguageSelection />} />

        <Route path="/ratepage" element={<HourlyRatePage />} />

        <Route path="/welcome" element={<WelcomeMsge />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgetpassword" element={<FrogetPassword />} /> 

        <Route path="/demo" element={<D />} />

        <Route path="/j" element={<J />} />

        {/* You can add a 404 Not Found page here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
