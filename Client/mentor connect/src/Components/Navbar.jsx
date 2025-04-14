import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Logo</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/profile" className="text-gray-700 hover:text-blue-600 font-medium">Profile</a>
            <a href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Team</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Projects</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;