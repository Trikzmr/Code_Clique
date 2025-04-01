import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold">Code Clique</h2>
        <p className="text-sm text-gray-400 mt-2">Connecting developers, sharing ideas, and building the future together.</p>
        
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-green-500 transition">About</a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition">Contact</a>
          <a href="#" className="text-gray-400 hover:text-green-500 transition">Privacy Policy</a>
        </div>

        <div className="mt-4 text-gray-500 text-xs">&copy; {new Date().getFullYear()} Code Clique. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
