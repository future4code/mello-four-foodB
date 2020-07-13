import React from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage';
import { SignUpPage } from './components/signUp/SignUpPage';
import { RegisterAddresPage } from './components/registerAddress/RegisterAddressPage';
import LandingPage from './components/landing/LandingPage';


function App() {
  return (
    <div className="App">
      <RegisterAddresPage />
    </div>
  );
}

export default App;
