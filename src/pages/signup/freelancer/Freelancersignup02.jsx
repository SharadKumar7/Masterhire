import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Calendar, ChevronDown, Camera } from 'lucide-react';

const MasterHireBasicDetailsForm = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null); 

    
    const [photo, setPhoto] = useState(null);
    const [dob, setDob] = useState("");
    const [country, setCountry] = useState("India");

    const handleNext = (e) => {
        e.preventDefault(); 
        navigate('/domain'); 
    };

    
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result); 
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center p-4">
            <div className="w-full max-w-2xl bg-white p-8">
                <header className="absolute top-4 left-4">
                    <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
                </header>

                <main>
                    <h2 className="text-lg font-semibold mb-8 text-gray-800">
                        Enter your basic details
                    </h2>

                    <form className="space-y-6" onSubmit={handleNext}>
                        {/* Section: Photo Upload and Date of Birth */}
                        <div className="flex gap-8 items-start">
                            
                            
                            <div 
                                onClick={() => fileInputRef.current.click()}
                                className="flex-shrink-0 w-40 h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-teal-500 hover:bg-gray-50 transition overflow-hidden relative"
                            >
                                {photo ? (
                                    <img src={photo} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <>
                                        <Camera className="w-8 h-8 text-gray-400 mb-2" />
                                        <span className="text-xs text-gray-500 text-center px-2">Click to upload photo</span>
                                    </>
                                )}
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    className="hidden" 
                                    accept="image/*" 
                                    onChange={handlePhotoChange} 
                                />
                            </div>

                            <div className="flex-grow space-y-6">
                                
                                <div>
                                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            id="dob"
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                                        />
                                        
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                    <div className="relative">
                                        <select
                                            id="gender"
                                            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-teal-500 focus:border-teal-500 appearance-none"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute inset-y-0 right-3 flex items-center pointer-events-none w-4 h-4 my-auto text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                            <div className="relative">
                                <select
                                    id="country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-teal-500 focus:border-teal-500 appearance-none"
                                >
                                    <option value="India">India</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <ChevronDown className="absolute inset-y-0 right-3 flex items-center pointer-events-none w-4 h-4 my-auto text-gray-400" />
                            </div>
                        </div>

                        
                        <div>
                            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                            <input type="text" id="streetAddress" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/3">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input type="text" id="city" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                            </div>
                            <div className="w-1/3">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                                <input type="text" id="state" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                            </div>
                            <div className="w-1/3">
                                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal code</label>
                                <input type="text" id="zip" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile No.</label>
                            <div className="flex items-center">
                                <div className="flex items-center border border-gray-300 bg-gray-50 p-2 rounded-l-lg h-[42px] border-r-0">
                                    <div className="w-6 h-4 bg-white relative mr-1 border border-gray-200">
                                        <div className="absolute top-0 w-full h-1/3 bg-[#FF9933]"></div>
                                        <div className="absolute bottom-0 w-full h-1/3 bg-[#128807]"></div>
                                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#000080]"></div>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-600 ml-1">+91</span>
                                </div>
                                <input
                                    type="tel"
                                    id="mobile"
                                    placeholder="Enter mobile number"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button type="submit" 
                                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out">
                                Next
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default MasterHireBasicDetailsForm;
