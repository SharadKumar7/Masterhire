import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landingpage from "./pages/auth/Landingpage";
import Login from "./pages/auth/Login";
import About from "./components/About";


import SelectionSignup from "./pages/auth/Signup";
import ClientSignup from "./pages/signup/client/Clientsignup";
import FreelancerSignupForm from "./pages/signup/freelancer/Freelancersignup01";
import BasicDetailsForm from "./pages/signup/freelancer/Freelancersignup02";
import DomainSelection from "./pages/signup/freelancer/Freelancersignup03";
import SkillSelection from "./pages/signup/freelancer/Freelancersignup04";
import TitleBioForm from "./pages/signup/freelancer/Freelancersignup05";
import ExperiencePage from "./pages/signup/freelancer/Freelancersignup06";
import EducationPage from "./pages/signup/freelancer/Freelancersignup07";
import LanguageSelection from "./pages/signup/freelancer/Freelancersignup08";
import HourlyRatePage from "./pages/signup/freelancer/Freelancersignup09";

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
        {/* Step 2: Sign up details */}
        <Route path="/freelancersignup" element={<FreelancerSignupForm />} />
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

        {/* You can add a 404 Not Found page here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
