import React from "react";
import { MdNotifications, MdMail, MdAccountCircle, MdSearch } from "react-icons/md";

const Header = () => (
  <header className="bg-white shadow-sm border-b">
    <div className="flex items-center justify-between px-4 py-3">
      {/* Left section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Welcome back, Anjali! Here's what's happening today.
        </p>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-1">
        {/* Search input */}
        <div className="relative">
          <MdSearch className="absolute top-2.5 left-3 text-black text-xl" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-8 pr-3 py-2 text-sm border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Notification icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 text-black">
          <MdNotifications size={24} />
        </button>

        {/* Profile icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 text-black">
          <MdAccountCircle size={28} />
        </button>
      </div>
    </div>
  </header>
);

export default Header;
