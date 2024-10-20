import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavBarNew = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <div className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className={`transition-shadow duration-300 ${sticky ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300`}>
          <nav className={`flex items-center justify-between p-6 lg:px-8 ${sticky ? 'bg-white' : 'bg-transparent'}`} aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src="https://startup.bihar.gov.in/static/media/new_logo.efdd49a20c5fb7fe0b73.png"
                  alt="Company Logo"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex lg:gap-x-12`}>
              <ScrollLink to="product" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-900">
                Startups List
              </ScrollLink>
              <ScrollLink to="features" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-900">
                Mentors List
              </ScrollLink>
              <ScrollLink to="marketplace" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-900">
                Coworking Space
              </ScrollLink>
              <ScrollLink to="company" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-gray-900">
                Work with Us
              </ScrollLink>
            </div>

            {/* Login Button */}
            <div className="lg:flex lg:flex-1 lg:justify-end">
              <Link to="/login">
                <button className="ml-2 flex items-center text-m font-semibold leading-6 text-gray-900 hover:text-blue-600">
                  Login<span aria-hidden="true" className="ml-1">&rarr;</span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden flex items-center">
              {mobileMenu ? 'Close' : 'Menu'}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="flex flex-col lg:hidden p-4 bg-white shadow-md">
              <ScrollLink
                to="product"
                smooth={true}
                duration={500}
                className="text-sm font-semibold leading-6 text-gray-900 py-2"
                onClick={toggleMenu} // Close menu on click
              >
                Startups List
              </ScrollLink>
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="text-sm font-semibold leading-6 text-gray-900 py-2"
                onClick={toggleMenu} // Close menu on click
              >
                Mentors List
              </ScrollLink>
              <ScrollLink
                to="marketplace"
                smooth={true}
                duration={500}
                className="text-sm font-semibold leading-6 text-gray-900 py-2"
                onClick={toggleMenu} // Close menu on click
              >
                Coworking Space
              </ScrollLink>
              <ScrollLink
                to="company"
                smooth={true}
                duration={500}
                className="text-sm font-semibold leading-6 text-gray-900 py-2"
                onClick={toggleMenu} // Close menu on click
              >
                Work with Us
              </ScrollLink>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default NavBarNew;
