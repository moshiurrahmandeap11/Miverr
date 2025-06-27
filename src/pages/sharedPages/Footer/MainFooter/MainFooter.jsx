import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe, FaDollarSign, FaUniversalAccess } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="bg-white py-4 border-t">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Miverr</h1>
          <span>© {new Date().getFullYear()} Miverr International Ltd.</span>
        </div>

        {/* Right: Social + Language + Currency + Accessibility */}
        <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>

          {/* Language */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <FaGlobe />
            <span>English</span>
          </div>

          {/* Currency */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <FaDollarSign />
            <span>USD</span>
          </div>

          {/* Accessibility */}
          <div className="cursor-pointer hover:text-black">
            <FaUniversalAccess />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
