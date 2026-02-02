import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 1. Import the provider from your context file
import { SignupProvider } from './context/SignupContext' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the App so all pages can access the data */}
    <SignupProvider>
      <App />
    </SignupProvider>
  </React.StrictMode>,
)
