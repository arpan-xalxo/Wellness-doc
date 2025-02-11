import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../contexts/contextprovider';

const NavbarHome: React.FC = () => {
  const { user, logout } = useAuthContext();
  const [activeSection, setActiveSection] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="fixed z-50 flex bg-black bg-opacity-0 justify-center items-center h-16 w-full">
        {/* Logo Section */}
        <div className="absolute left-0 ml-5">
          <a href="/"><img src="/logo1.png" alt="logo" className="h-32 w-32" /></a>
        </div>

        {/* Nav Links Section */}
        <div className="flex justify-center gap-8 text-black text-lg font-bold">
          <div>
            <a 
              href="/" 
              onClick={() => handleSetActive('home')}
              className={`cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeSection === 'home' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Home
            </a>
          </div>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeSection === 'services' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded">
                <div onClick={closeDropdown} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="#service1">Service 1</Link>
                </div>
                <div onClick={closeDropdown} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="#service2">Service 2</Link>
                </div>
              </div>
            )}
          </div>

          {/* Other Links */}
          <div>
            <a 
              href="#about-us" 
              onClick={() => handleSetActive('about-us')}
              className={`cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeSection === 'about-us' ? 'border-b-2 border-blue-500' : ''}`}
            >
              About
            </a>
          </div>
          <div>
            <a 
              href="#contact" 
              onClick={() => handleSetActive('contact')}
              className={`cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeSection === 'contact' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Conditional Buttons */}
        <div className="absolute right-0 mr-5 flex gap-2">
          {user ? (
            <>
              {/* Dashboard Link */}
              <div className="border-2 p-1 px-5 rounded-xl border-blue-500 text-black hover:scale-95 hover:bg-blue-500 hover:text-white transform duration-300 font-semibold">
                <Link to={user.user_type === 'doctor' ? '/doctor-dashboard' : '/patient-dashboard'}>
                  Dashboard
                </Link>
              </div>
              {/* Logout Button */}
              <div
                onClick={logout}
                className="border-2 p-1 px-5 rounded-xl border-blue-500 text-black hover:scale-95 hover:bg-blue-500 hover:text-white transform duration-300 font-semibold cursor-pointer"
              >
                Logout
              </div>
            </>
          ) : (
            <>
              {/* Sign Up and Login Buttons */}
              <div className="border-2 p-1 px-5 rounded-xl border-blue-500 text-black hover:scale-95 hover:bg-blue-500 hover:text-white transform duration-300 font-semibold">
                <Link to="/signup-choice">Sign Up</Link>
              </div>
              <div className="border-2 p-1 px-5 rounded-xl border-blue-500 hover:scale-95 hover:bg-blue-500 hover:text-white transform duration-300 font-semibold">
                <Link to="/login">Login</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
