import React from 'react';
import Header from '../../components/dashboard/Header';
import JobOverviewSection from '../../components/dashboard/JobOverviewSection';
import FindWhatYouNeedSection from '../../components/dashboard/FindWhatYouNeedSection';
import ProfileCard from '../../components/dashboard/ProfileCard'; // Reusable component
import ResourceCard from '../../components/dashboard/ResourceCard'; // Reusable component
import Footer from '../../components/dashboard/Footer';

// --- Placeholder Data for Demonstration ---
const consultants = [
  { name: 'John Doe', location: 'New York, USA', successRate: '95%', image: 'https://via.placeholder.com/150' },
  { name: 'Jane Smith', location: 'London, UK', successRate: '90%', image: 'https://via.placeholder.com/150' },
  { name: 'Alice Johnson', location: 'Sydney, Australia', successRate: '85%', image: 'https://via.placeholder.com/150' },
  { name: 'Bob Brown', location: 'Toronto, Canada', successRate: '80%', image: 'https://via.placeholder.com/150' },
];

const resources = [
  { title: 'Budget & pricing', description: 'Understand rates, fees, and how to set your budget', color: 'bg-teal-100', icon: '💸' },
  { title: 'Payment & billing', description: 'Learn about payment methods, invoicing, and refunds', color: 'bg-blue-100', icon: '💳' },
  { title: 'Privacy & security', description: 'Your data security and privacy on MasterHire', color: 'bg-purple-100', icon: '🔒' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col gap-10">
          <JobOverviewSection />
          <FindWhatYouNeedSection />

          {/* Top Consultation Providers */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Top Consultation Providers</h2>
              <a href="#" className="text-teal-600 hover:underline">Browse consultations →</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultants.map((profile, index) => (
                <ProfileCard key={index} profile={profile} actionButtonText="Book a consultation" />
              ))}
            </div>
          </section>

          {/* Recently Viewed Profiles */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Recently Viewed Profiles</h2>
              <a href="#" className="text-teal-600 hover:underline">View all resources →</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Using same consultants data for simplicity */}
              {consultants.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
              ))}
            </div>
          </section>

          {/* Help and Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Help and resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
