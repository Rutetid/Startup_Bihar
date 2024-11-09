import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Startupdetails from '../startupdetails';
import './LeftBar.css';
import menu from '../../../../assets/menu.png';

const LeftBar = () => {
    const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state
    const navigate = useNavigate();
    const sidebarRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);


    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('token'); // Clear the authentication token
            navigate('/login'); // Redirect to login page
        }
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle sidebar visibility
    };

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavigation = (item, path) => {
        if (selectedItem && selectedItem !== item) {
            if (!window.confirm("Are you sure you want to leave this page?")) {
                return;
            }
        }
        setSelectedItem(item);
        navigate(path);
    };


    return (
        <>
            {/* Toggle Button for Smaller Screens */}
            <button
                onClick={toggleSidebar}
                className="absolute top-4 left-4 z-50 md:hidden p-2 bg-gray-200 rounded"
            >
                <img src={menu} alt="menu icon" className="h-6 w-6" />
            </button>

            {/* Sidebar with smooth animation */}
            <div
                ref={sidebarRef}
                className={`bg-[#1c2437] text-[#f5f7f6] h-screen overflow-y-scroll overflow-x-hidden flex flex-col justify-between p-4 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static`}
                style={{
                    width: isOpen ? (window.innerWidth < 768 ? '60%' : window.innerWidth < 1024 ? '40%' : '20%') : '20%',
                }}
            >
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
                    <button
                        onClick={() => handleNavigation('home', '/Userprofile')}
                        className={`flex items-center justify-between px-3 py-2 rounded-md ${selectedItem === 'home' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-chart-bar"></i>
                            <span>Home</span>
                        </span>
                    </button>

                    <button
                        onClick={() => handleNavigation('ssu', '/')}
                        className={`flex items-center justify-between px-3 py-2 rounded-md ${selectedItem === 'ssu' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-chart-barr"></i>
                            <span>SSU</span>
                        </span>
                    </button>
                    {/* Matching Loan */}
                    <button
                        onClick={() => handleNavigation('matchingLoan', '/matchingloan')}
                        className={`flex items-center justify-between px-3 py-2 rounded-md ${selectedItem === 'matchingLoan' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-chart-barrr"></i>
                            <span>Matching Loan</span>
                        </span>
                    </button>

                    {/* Notification */}
                    <button
                        onClick={() => handleNavigation('notification', '/notification')}
                        className={`flex items-center justify-between px-3 py-2 rounded-md ${selectedItem === 'notification' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-bell"></i>
                            <span>Notification</span>
                        </span>
                        <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded-full">21</span>
                    </button>

                    {/* Incubation */}
                    <button
                        onClick={() => handleNavigation('incubation', '/incubation')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'incubation' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-lightbulb"></i>
                        <span className="ml-2">Incubation</span>
                    </button>

                    {/* SeedFund */}
                    <button
                        onClick={() => handleNavigation('seedFund', '/seedfunded')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'seedFund' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-lightbulbb"></i>
                        <span className="ml-2">SeedFund</span>
                    </button>

                    {/* QPR */}
                    <button
                        onClick={() => handleNavigation('qpr', '/qpr')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'qpr' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-file-alt"></i>
                        <span className="ml-2">QPR</span>
                    </button>

                    {/* Reimbursement */}
                    <button
                        onClick={() => handleNavigation('reimbursement', '/reimbursement')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'reimbursement' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-dollar-sign"></i>
                        <span className="ml-2">Reimbursement</span>
                    </button>

                    {/* Coworking */}
                    <button
                        onClick={() => handleNavigation('coworking', '/coworking')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'coworking' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-building"></i>
                        <span className="ml-2">Coworking</span>
                    </button>

                    {/* Acceleration */}
                    <button
                        onClick={() => handleNavigation('acceleration', '/acceleration')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'acceleration' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-rocket"></i>
                        <span className="ml-2">Acceleration</span>
                    </button>

                </div>

                {/* Group Section */}
                <div className="flex flex-col space-y-4 mb-8">
                    <span className="text-sm font-semibold">Group</span>
                    {/* First Tranche */}
                    <button
                        onClick={() => handleNavigation('firstTranche', '/StartupForm')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'firstTranche' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-rockett"></i>
                        <span className="ml-2">First Tranche</span>
                    </button>

                    {/* Second Tranche */}
                    <button
                        onClick={() => handleNavigation('secondTranche', '/SecondTrance')}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'secondTranche' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-rockettt"></i>
                        <span className="ml-2">Second Tranche</span>
                    </button>

                </div>
                <hr className="border-t border-gray-600 my-2 " />
                <div>
                    <Link to="/" className="flex items-center justify-between px-3 py-4 rounded-md hover:bg-gray-500">
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-chart-barrrrr"></i>
                            <span>Help</span>
                        </span>
                    </Link>
                    <button onClick={handleLogout} className="flex items-center justify-between px-3 py-4 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-sign-out-altttt"></i>
                        <span className="ml-2">Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default LeftBar;
