import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeNav from './components/HomePage/HomeNav';
import UserProfile from './components/Profile/UserProfile/UserProfile'; // Import ProfileMain
import LoginCopy from './components/Login/LoginCopy';
import Startupform from './components/UserForm/Startupform';
import Upload from './components/UserForm/Upload';
import SecondTrance from './components/UserForm/SecondTrance';
import Profile from './components/Profile/PublicProfile/Profile';
import AdminApp from './components/Profile/AdminProfile/AdminApp';
import SecondTrancheForm from './components/Profile/AdminProfile/secondTrancheAdminForm';
import SeedAdminForm from './components/Profile/AdminProfile/seedAdminForm';
import AdminForm from './components/Profile/AdminProfile/starterAdminForm';
import TopNavbar from './components/Profile/AdminProfile/Navbar/TopNavBar';
import Acceleration from './components/UserForm/Acceleration';
import Coworking from './components/UserForm/Coworking';
import Matchingloan from './components/UserForm/Matchingloan';
import Reimbursement from './components/UserForm/Reimbursement';
import PostSeed from './components/UserForm/Postseed';
import SeedFunded from './components/UserForm/SeedFunded';




const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen tyle={{
          background: 'linear-gradient(90deg, rgb(241, 241, 241) 0%, rgb(211, 208, 227) 85%, rgb(224, 224, 224) 100%)',
        }}">
        <Routes>
          <Route path="/" element={<HomeNav />} />
          <Route path="/login" element={<LoginCopy />} />
          <Route path="/adminprofile" element={<AdminApp/>} /> {/* Admin profile route */}
          <Route path="/UserProfile" element={<UserProfile />} />   {/* User profile route */}
          <Route path="/all" element={<HomeNav />} />
          <Route path="/tech" element={<HomeNav />} />
          <Route path="/health" element={<HomeNav />} />
          <Route path="/finance" element={<HomeNav />} />
          <Route path="/education" element={<HomeNav />} />
          <Route path="/food" element={<HomeNav />} />
          <Route path="/startupform" element={<Startupform />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/secondtrance" element={<SecondTrance />} />
          <Route path="/seedfunded" element={<SeedFunded />} />
          <Route path="/postseed" element={<PostSeed />} />
          <Route path="/login1" element={<LoginCopy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AdminSeedFundForm" element={<SeedAdminForm />} />
          <Route path="/AdminSecondTrancheForm" element={<SecondTrancheForm />} />
          <Route path="/AdminForm" element={<AdminForm />} />
          <Route path="/TopNavbar" element={<TopNavbar />} />
          <Route path="/Matchingloan" element={<Matchingloan/>} />
          <Route path="/Reimbursement" element={<Reimbursement/>} />
          <Route path="/coworking" element={<Coworking/>} />
          <Route path="/acceleration" element={<Acceleration/>} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;