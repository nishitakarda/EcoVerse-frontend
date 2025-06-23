import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r bg-[#0077b6] py-4 px-6 flex items-center justify-between fixed w-full z-20">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-black">Beach</span>
            <span className="text-[#212121]">Warrior</span>
          </span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white hover:text-[#8ee2ff] transition-colors font-medium">
          Home
        </a>
        <a href="#" className="text-white hover:text-[#8ee2ff] transition-colors font-medium">
          About
        </a>
        <a href="#" className="text-white hover:text-[#8ee2ff] transition-colors font-medium">
          Events
        </a>
        <a href="#" className="text-white hover:text-[#8ee2ff] transition-colors font-medium">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-[#0096c7] text-[#1a4f7c] px-6 py-2 rounded-md hover:bg-white transition-colors font-medium">
          Sign Up
        </button>
        <button className="border-2 border-[#0096c7] text-white px-6 py-2 rounded-md hover:bg-[#8ee2ff] hover:text-[#1a4f7c] transition-colors font-medium">
          Login
        </button>
      </div>
    </nav>
  );
}
