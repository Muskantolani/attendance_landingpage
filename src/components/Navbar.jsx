import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-lg p-6 h-24">
      <span className="font-semibold text-xl ml-0 xs:ml-2 sm:ml-10 md:ml-16 lg:ml-24">Logo</span>
      <div className="ml-auto me-0 xs:me-2 sm:me-10 md:me-16 lg:me-24">
        <div className="space-x-2 sm:space-x-8">
          <button className="px-2 xs:px-4 sm:px-8 py-2 font-medium text-xs xs:text-sm hover:text-base focus:bg-active bg-callaction text-white duration-200 ease-in rounded-md">
            Home
          </button>
          <button className="px-2 xs:px-4 sm:px-8 py-2 font-medium text-xs xs:text-sm hover:text-base focus:bg-active bg-callaction text-white duration-200 ease-in rounded-md">
            Contact
          </button>
          <button className="px-2 xs:px-4 sm:px-8 py-2 font-medium text-xs xs:text-sm hover:text-base focus:bg-active bg-callaction text-white duration-200 ease-in rounded-md">
            About Us
          </button>
          <button className="px-2 xs:px-4 sm:px-8 py-2 font-medium text-xs xs:text-sm hover:text-base focus:bg-active bg-callaction text-white duration-200 ease-in rounded-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;