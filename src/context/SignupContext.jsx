import React, { createContext, useState, useContext , useRef} from 'react';

const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [signupData, setSignupData] = useState({
        firstName: "", lastName: "", email: "", password: "", country: "", terms: false,
        photo: null,
        dob: "",
        gender: "",
        mobile: "", 
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
         
        selectedCategory: "Accounting & Consulting", 
        selectedSpecialities: [],

        skills : [],
        title :"",
        bio :"",
        experiences : [],
        education : [],
        languages : []
    });

    const updateSignupData = (newData) => {
        setSignupData(prev => ({ ...prev, ...newData }));
    };

    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);

    const startLoading = () => {
        setProgress(10); 
        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) return prev; 
                return prev + 5; 
            });
        }, 200); 
    };

    const stopLoading = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(100); 
        setTimeout(() => setProgress(0), 400); 
    };

    return (
        <SignupContext.Provider value={{ progress, startLoading, stopLoading,signupData, updateSignupData }}>
            {children}
        </SignupContext.Provider>
    );
};

export const useSignup = () => useContext(SignupContext);
