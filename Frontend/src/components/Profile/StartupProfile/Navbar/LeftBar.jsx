import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Startupdetails from '../Design/startupdetails';
import './LeftBar.css';
import menu from '../../../../assets/menu.png';
import axios from 'axios';

const menuItems = [
    { name: 'Home', panel: 'UserProfile', iconClass: 'fas fa-chart-bar' },
    { name: 'SSU', panel: 'ssu', iconClass: 'fas fa-chart-bar' },
    { name: 'Matching Loan', panel: 'Matchingloan', iconClass: 'fas fa-handshake' },
    { name: 'Notification', panel: 'notification', iconClass: 'fas fa-bell', notificationCount: 21 },
    { name: 'Incubation', panel: 'Incubation', iconClass: 'fas fa-seedling' },
    { name: 'SeedFund', panel: 'SeedFund', iconClass: 'fas fa-lightbulb' },
    { name: 'PostSeed', panel: 'PostSeed', iconClass: 'fas fa-lightbulb' },
    { name: 'QPR', panel: 'Qpr', iconClass: 'fas fa-file-alt' },
    { name: 'Reimbursement', panel: 'Reimbursement', iconClass: 'fas fa-dollar-sign' },
    { name: 'Coworking', panel: 'Coworking', iconClass: 'fas fa-building' },
    { name: 'Acceleration', panel: 'Acceleration', iconClass: 'fas fa-rocket' },
];

const LeftBar = ({ changePanel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const sidebarRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    };

    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const checkDocumentStatus = async (url) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get(url, {
                headers: { Authorization: token },
            });
            const { document } = response.data;

            const statusMessages = {
                created: "Document Status: Created - Your document is under review.",
                accepted: "Document Status: Accepted - Your document has been approved.",
                rejected: "Document Status: Rejected - Your document has been rejected.",
            };

            alert(statusMessages[document.documentStatus] || `Document Status: ${document.documentStatus} - Unknown status.`);
        } catch (error) {
            console.error('Error fetching document status:', error);
            alert('Failed to retrieve document status.');
        }
    };

    return (
        <>
            <button onClick={toggleSidebar} className="absolute top-4 left-4 z-50 md:hidden p-2 bg-gray-200 rounded">
                <img src={menu} alt="menu icon" className="h-6 w-6" />
            </button>

            <div
                ref={sidebarRef}
                className={`bg-[#1c2437] text-[#f5f7f6] h-screen overflow-y-scroll overflow-x-hidden flex flex-col justify-between p-4 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static`}
                style={{ width: isOpen ? '60%' : '22%' }}
            >
                <div className="flex items-center space-x-2 mb-8">
                    <img
                        alt="logo"
                        src="https://startup.bihar.gov.in/static/media/new_logo.efdd49a20c5fb7fe0b73.png"
                        className="h-8"
                    />
                </div>
                
                <Startupdetails
                    founderimage="https://cdn.brandfetch.io/massart.edu/fallback/transparent/theme/dark/h/512/w/512/icon?t=1719560097892"
                    companyname="AgriTech Firm Pvt Ltd"
                    year="2000"
                />

                <div className="flex flex-col space-y-4 mb-8">
                    <span className="text-sm font-semibold">Menu</span>
                    {menuItems.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setSelectedItem(item.panel);
                                changePanel(item.panel);
                            }}
                            className={`flex items-center justify-between px-3 py-2 rounded-md ${selectedItem === item.panel ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                        >
                            <span className="flex items-center space-x-2">
                                <i className={item.iconClass}></i>
                                <span>{item.name}</span>
                            </span>
                            {item.notificationCount && (
                                <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded-full">{item.notificationCount}</span>
                            )}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col space-y-4 mb-8">
                    <span className="text-sm font-semibold">Group</span>
                    <button
                        onClick={() => {
                            checkDocumentStatus('https://startup-bihar1.onrender.com/api/StartupProfile/user-document');
                            changePanel('StartupForm');
                            setSelectedItem('StartupForm');
                        }}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'StartupForm' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-rocket"></i>
                        <span className="ml-2">First Tranche</span>
                    </button>

                    <button
                        onClick={() => {
                            setSelectedItem('SecondTranche');
                            changePanel('SecondTranche');}}
                        className={`flex items-center px-3 py-2 rounded-md ${selectedItem === 'SecondTranche' ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
                    >
                        <i className="fas fa-rocket"></i>
                        <span className="ml-2">Second Tranche</span>
                    </button>
                </div>
                
                <hr className="border-t border-gray-600 my-2" />
                
                <div>
                    <Link to="/" className="flex items-center justify-between px-3 py-4 rounded-md hover:bg-gray-500">
                        <span className="flex items-center space-x-2">
                            <i className="fas fa-question-circle"></i>
                            <span>Help</span>
                        </span>
                    </Link>
                    <button onClick={handleLogout} className="flex items-center justify-between px-3 py-4 hover:bg-gray-500 rounded-md">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="ml-2">Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default LeftBar;
