import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Startupdetails from '../startupdetails';

const LeftBar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the authentication token
        navigate('/login'); // Redirect to login page
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle sidebar visibility
    };

    return (
        <>
            {/* Toggle Button for Smaller Screens */}
            <button onClick={toggleSidebar} className="md:hidden p-4 bg-gray-200 rounded">
                {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>

            {/* Sidebar */}
            <div className={`rounded-lg left-bar bg-slate-100 text-black h-full flex flex-col justify-between p-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                {/* Logo Section */}
                <div className="flex items-center space-x-2 mb-8">
                    <img
                        alt="logo"
                        src="https://startup.bihar.gov.in/static/media/new_logo.efdd49a20c5fb7fe0b73.png"
                        className="h-8"
                    />
                    <span className="text-xl font-bold"></span>
                </div>
                <Startupdetails
                    founderimage="https://cdn.brandfetch.io/massart.edu/fallback/transparent/theme/dark/h/512/w/512/icon?t=1719560097892"
                    companyname="AgriTech Firm pvt ltd"
                    year="2000"
                />

                {/* Menu Section */}
                <div className="flex flex-col space-y-4 mb-8">
                    <span className="text-sm font-semibold">Menu</span>
                    <Link to="/Userprofile" className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-500">
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-chart-bar"></i>
                            <span>Home</span>
                        </span>
                    </Link>
                    <Link to="/" className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-500">
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-chart-bar"></i>
                            <span>SSU</span>
                        </span>
                    </Link>
                    <Link to="/matchingloan" className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-500">
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-chart-bar"></i>
                            <span>Matching Loan</span>
                        </span>
                    </Link>
                    <Link to="/notification" className="flex items-center justify-between px-3 py-2 hover:bg-gray-500 rounded-md">
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-bell"></i>
                            <span>Notification</span>
                        </span>
                        <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded-full">21</span>
                    </Link>
                    <Link to="/incubation" className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-lightbulb"></i>
                        <span className="ml-2">Incubation</span>
                    </Link>
                    <Link to="/ipr" className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-file-alt"></i>
                        <span className="ml-2">IPR</span>
                    </Link>
                    <Link to="/reimbursement" className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-dollar-sign"></i>
                        <span className="ml-2">Reimbursement</span>
                    </Link>
                    <Link to="/coworking" className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-building"></i>
                        <span className="ml-2">Coworking</span>
                    </Link>
                    <Link to="/acceleration" className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-rocket"></i>
                        <span className="ml-2">Acceleration</span>
                    </Link>
                </div>

                {/* Group Section */}
                <div className="flex flex-col space-y-4 mb-8">
                    <span className="text-sm font-semibold">Group</span>
                    <Link to="/StartupForm" className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-rocket"></i>
                        <span className="ml-2">First Tranche</span>
                    </Link>
                    <Link to="/SecondTrance" className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-rocket"></i>
                        <span className="ml-2">Second Tranche</span>
                    </Link>
                </div>

                {/* Theme Switcher and User Profile */}
                <div className="flex flex-col items-center">
                    <button onClick={handleLogout} className="flex items-center px-3 py-2 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="ml-2">Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default LeftBar;
