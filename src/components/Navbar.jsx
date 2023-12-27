import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-bottom p-6">
      <div className="flex items-center flex-shrink-0">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="ml-auto">
        <div className="flex space-x-4">
          <a
            href="#home"
            className="px-4 py-2 text-gray-800 text-xl hover:underline text-primary"
          >
            Home
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-gray-800 text-xl hover:underline text-primary"
          >
            Contact
          </a>
          <a
            href="#about"
            className="px-4 py-2 text-gray-800 text-xl hover:underline text-primary"
          >
            About Us
          </a>
          <a
            href="#login"
            className="px-4 py-2 bg-gray-800 text-white hover:underline text-primary"
          >
            Login
          </a>
        </div>
      </div>
      <hr className="mt-4 border-gray-200" />
    </nav>
  );
};

export default Navbar;