import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginCopy from './components/Login/LoginCopy';
import TopNavbar from './components/Profile/AdminProfile/Navbar/TopNavBar';
import HomePage from './components/HomePage/Home';
import StartupProfileMain from './components/Profile/StartupProfile/StartupProfileMain';
import SeedFunded from './components/UserForm/SeedFunded';
import SecondTrance from './components/UserForm/SecondTrance';
import AdminMainProfile from './components/Admin_Profile_Abhishek/AdminMainProfile';
import Matchingloan from './components/UserForm/Matchingloan';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginCopy onLogin={handleLogin} />} />
        <Route path="/userprofile" element={<StartupProfileMain />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/adminprofile" element={<AdminMainProfile />} />
        <Route path="/seedfunded" element={<SeedFunded />} />
        <Route path="/SecondTranche" element={<SecondTrance />} />
      </Routes>
    </Router>
  );
};

export default App;
