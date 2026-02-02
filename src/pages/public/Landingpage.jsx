import React, { useState } from 'react';
import Footer from "../../components/layout/Footer"
import Header from "../../components/layout/Header"


const MasterHireLandingPage = () => {
  // State for Find Talent / Jobs Tab
  const [activeTab, setActiveTab] = useState('talent');
  const placeholderText =
    activeTab === 'talent'
      ? 'Search By Role, Skills, Or Keywords'
      : 'Search For Job Titles, Companies, Or Locations';

  return (
    // Equivalent to body styles
    <div className="min-h-screen text-white overflow-x-hidden font-sans" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 100%)' }}>
      
      <Header /> {/* Header component remains unchanged */}

      {/* --- HERO SECTION --- */}
      <header>
        {/* Added wrapper div for alignment consistency and animation styles */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center py-20 min-h-[600px]">
            <div className="flex-1 max-w-xl">
            
            <h1 
                className="text-5xl lg:text-6xl leading-tight mb-8"
                style={{ background: 'linear-gradient(135deg, #ffffff, #00ffaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Bringing Real Work And Real Talent Together
            </h1>

            <div className="bg-#0a1628  p-8 rounded-lg  max-w-md mx-auto ml-0 pl-0">
      {[
        "India's Own Freelance Marketplace",
        "Any Job You Can Possibly Think Of",
        "Zero Platform Charges",
        "Pay Only When You're 100% Happy",
      ].map((feature, index) => (
        <div key={index} className="flex items-center mb-4">
          {/* Checkmark icon container */}
          <div className="flex items-center justify-center w-5 h-5 bg-teal-500/20 text-teal-400 rounded-full mr-3 flex-shrink-0">
            <span className="text-xs font-bold">✔</span>
          </div>
          
          {/* Feature text with small font size (text-xs) */}
          <p className="text-white text-xs sm:text-sm m-0 leading-tight">
            {feature}
          </p>
        </div>
      ))}
    </div>

            <button 
                className="bg-gradient-to-br from-cyan-400 to-teal-400 text-[#0a1628] px-10 py-4 border-none rounded-lg text-base font-bold cursor-pointer transition-all mt-5 shadow-xl hover:-translate-y-1 hover:shadow-2xl"
                style={{ boxShadow: '0 5px 25px rgba(0, 255, 170, 0.3)' }}
            >
                Post a Project
            </button>
            </div>

            
            <div className="hidden md:flex flex-1 justify-center items-center">
                <div className="relative w-[300px] h-[400px] animate-float-custom">
                    {/* Phone Container */}
                    <div className="w-[200px] h-[350px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-4 shadow-2xl relative">
                        <div className="w-full h-full bg-screen-bg rounded-2xl flex flex-col items-center justify-center gap-5">
                            {/* Placeholder content inside phone */}
                            <div className="w-10 h-10 bg-teal-400 rounded-lg"></div>
                            <div className="w-4/5 h-2 bg-white/30 rounded"></div>
                            <div className="w-4/5 h-2 bg-white/30 rounded"></div>
                            <div className="w-4/5 h-2 bg-white/30 rounded"></div>
                        </div>
                    </div>

                    {/* Floating Envelope */}
                    <div className="absolute top-[-30px] right-[-50px] w-[120px] h-[90px] bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg animate-bounce-custom">
                        <div className="absolute top-5 left-5 w-[80px] h-[50px] bg-white rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
      </header>


      {/* --- FIND TALENT/JOBS SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-4xl lg:text-5xl text-white mb-6 md:mb-0">Find The Right Talent For Your Work</h2>
            </div>

            {/* Search & Explore Box  */}
            <div className="max-w-4xl mx-auto bg-[#23314f] p-4 rounded-2xl backdrop-blur-md shadow-2xl">
                
                {/* Tabs Container  */}
                <div className="flex justify-start gap-0 mb-4 p-1 bg-[#23314f] rounded-lg relative">
                    
                    {/* Sliding Indicator  */}
                    <div 
                        className={`absolute top-1 bottom-1 bg-[#00a887] rounded-lg transition-all duration-300 ease-in-out ${
                            activeTab === 'talent' ? 'left-1 w-[calc(50%-0.25rem)]' : 'left-[calc(50%+0.25rem)] w-[calc(50%-0.25rem)]'
                        }`}
                    />

                    <button 
                        onClick={() => setActiveTab('talent')}
                        className={`px-6 py-3 rounded-lg font-semibold flex-1 relative z-10 transition duration-150 ${
                            activeTab === 'talent' ? 'text-white' : 'text-gray-400'
                        }`}
                    >
                        Find Talent
                    </button>
                    
                    <button 
                        onClick={() => setActiveTab('jobs')}
                        className={`px-6 py-3 rounded-lg font-semibold flex-1 relative z-10 transition duration-150 ${
                            activeTab === 'jobs' ? 'text-white' : 'text-gray-400'
                        }`}
                    >
                        Explore Jobs
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-lg shadow-xl">
                    <input 
                        type="text" 
                        placeholder={placeholderText}
                        className="w-full px-5 py-3 text-gray-800 focus:outline-none"
                    />
                    {/* Search Button  */}
                    <button 
                        className="px-6 py-3 rounded-r-lg font-semibold transition-all bg-[#D9F4FF] text-gray-800"
                    >
                        🔍
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h3 className="text-lg font-semibold mb-12">
                Explore Over 1000+ Categories
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm text-gray-300">
                {[
                    "Web Design", "Mobile Apps", "UI / UX", "Python", "Java", "PHP",
                    "React", "Node.js", "SEO", "Content Writing", "Marketing", "Video Editing",
                    "Data Science", "AI / ML", "DevOps", "Cyber Security", "Testing",
                    "Blockchain", "Cloud", "Game Development", "Automation", "No-Code",
                    "Product Management",
                    "Business Analysis",
                    "Technical Writing",
                    "Quality Assurance",
                    "IT Support",
                    "Data Engineering",
                    "UI Animation"
                ].map((item) => (
                    <div
                        key={item}
                        className="bg-[#0b1437] py-3 rounded-md text-center
          hover:bg-indigo-600 hover:text-white transition cursor-pointer"
                    >
                        {item}
                    </div>
                ))}

                <button
                    className="bg-teal-500 hover:bg-teal-400
        text-[#0a1628] font-semibold rounded-md py-3
        col-span-2 md:col-span-1 transition"
                >
                    Explore More →
                </button>
            </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <h3 className="text-lg font-semibold mb-12">
                What Our Clients Experienced
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className="h-36 bg-white/10 rounded-md"
                    />
                ))}
            </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      
      <section className="py-16"> 
        {/* Content wrapper for consistent alignment */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            
            <div className="grid grid-cols-2 gap-10 justify-center">
                
                <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="text-4xl font-bold mb-2">
                        <span>XXXXXXX</span>
                    </h4>
                    <p className="text-gray-400 text-sm">Total Registered Users</p>
                </div>
                
                <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="text-4xl font-bold mb-2">
                        <span>XXXXXXX</span>
                    </h4>
                    <p className="text-gray-400 text-sm">Total Jobs Posted</p>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER (UNCHANGED) */}
      <Footer />

    </div>
    
  );
};

export default MasterHireLandingPage;
