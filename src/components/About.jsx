import React from 'react';

const MasterHireAboutPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header/Logo Section */}
      <header className="mb-10">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto">
        
        {/* About MasterHire Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About MasterHire</h2>
          <p className="text-gray-600 mb-4">
            MasterHire is a professional freelancing platform built to connect businesses with skilled, reliable freelancers - without unnecessary noise, confusion, or wasted time. We believe hiring should be simple, transparent, and outcome-driven. Clients should find talent they can trust. Freelancers should get access to meaningful work that respects their skills and time.
          </p>
        </section>

        {/* WHY MASTERHIRE EXISTS Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">WHY MASTERHIRE EXISTS</h2>
          <p className="text-gray-600 mb-4">
            The freelancing landscape today is crowded and chaotic. Many platforms prioritize volume over quality, resulting in mismatched expectations and diluted outcomes.
          </p>
          <p className="text-gray-600 mb-4">
            MasterHire was created to restore clarity and professionalism to the hiring process. We focus on:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Clear requirements</li>
            <li>Verified skills</li>
            <li>Fair opportunities</li>
            <li>Measurable results</li>
          </ul>
        </section>

        {/* WHO MASTERHIRE IS FOR Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">WHO MASTERHIRE IS FOR</h2>
          
          <h3 className="font-bold text-gray-800 mb-2">Businesses</h3>
          <p className="text-gray-600 mb-4">
            Organizations looking for dependable freelancers who value deadlines, responsibility, and delivery.
          </p>
          
          <h3 className="font-bold text-gray-800 mb-2">Freelancers</h3>
          <p className="text-gray-600">
            Skilled professionals seeking serious clients, meaningful projects, and long-term growth.
          </p>
        </section>

        {/* OUR VISION Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">OUR VISION</h2>
          <p className="text-gray-600">
            To build a freelancing platform where trust, skill, and professionalism define success. MasterHire is designed to be a place where work is respected and results speak louder than promises.
          </p>
        </section>

      </main>
    </div>
  );
};

export default MasterHireAboutPage;
