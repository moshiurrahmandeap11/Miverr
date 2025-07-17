import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaDollarSign,
  FaUniversalAccess,
} from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6 border-t border-gray-700 text-sm text-gray-300">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">

        {/* Left Section - Logo + Copyright */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
          <h1 className="text-xl font-bold text-indigo-400">Miverr Pro</h1>
          <span>© {new Date().getFullYear()} Miverr International Ltd.</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-6">
          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer transition" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
          </div>

          {/* Language, Currency, Accessibility */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-end text-gray-300">
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
              <FaGlobe />
              <span>English</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
              <FaDollarSign />
              <span>USD</span>
            </div>
            <div className="cursor-pointer hover:text-white transition">
              <FaUniversalAccess />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default MainFooter;
