import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    {/* MasterHire Section */}
                    <div>
                        <h4 className="text-white font-bold mb-4">MasterHire</h4>
                        <ul className="space-y-3">
                            {['About', 'Our Impact', 'Selly & Security'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer Nav Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Footer Nav</h4>
                        <ul className="space-y-3">
                             {['Terms Of Services', 'Privacy & Security', 'Community', 'About Us', 'How It Works', 'Our Project'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Join Newsletter & Follow Us */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-4">Join Our Newsletter</h4>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full p-3 rounded-l-lg outline-none text-gray-800" 
                            />
                            <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-r-lg font-semibold">
                                Subscribe
                            </button>
                        </form>
                        <h4 className="text-white font-bold mt-8 mb-4">FOLLOW US ON:</h4>
                        {/* Placeholder for social media icons */}
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-gray-700 rounded text-gray-400 flex items-center justify-center">F</div>
                            <div className="w-8 h-8 bg-gray-700 rounded text-gray-400 flex items-center justify-center">T</div>
                            <div className="w-8 h-8 bg-gray-700 rounded text-gray-400 flex items-center justify-center">L</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6">
                    <p className="text-gray-500 text-sm text-center">&copy; {new Date().getFullYear()} MasterHire. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
