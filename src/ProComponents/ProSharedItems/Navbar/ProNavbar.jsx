import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaSearch,
  FaChevronDown,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import ProProducts from "../ProNavComponents/ProProducts/ProProducts";
import ProResources from "../ProNavComponents/ProResources/ProResources"; // ✅ Don't forget this import

const ProNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const sidebarRef = useRef();
  const productsRef = useRef();
  const resourcesRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setShowProducts(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setShowResources(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, showProducts, showResources]);

  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md px-4 py-3 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Left */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleMenu} className="text-xl text-white">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="text-2xl font-bold">Miverr Pro</div>
        </div>

        {/* Desktop Logo & Search */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="text-2xl font-bold">Miverr Pro.</div>
          <div className="flex items-center bg-gray-700 px-3 py-1.5 rounded-full">
            <FaSearch className="text-gray-300 mr-2" />
            <input
              type="text"
              placeholder="Search products"
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-48"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProducts(!showProducts);
                setShowResources(false);
              }}
              className="flex items-center gap-1 hover:text-indigo-400"
            >
              Products <FaChevronDown className="text-xs" />
            </button>
            {showProducts && (
              <div
                ref={productsRef}
                className="absolute top-[120%] right-0 mt-2 z-50"
              >
                <ProProducts />
              </div>
            )}
          </div>

          <NavLink to={"/pro/plans"} className="hover:text-indigo-400">
            Plans
          </NavLink>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowResources(!showResources);
                setShowProducts(false);
              }}
              className="flex items-center gap-1 hover:text-indigo-400"
            >
              Resources <FaChevronDown className="text-xs" />
            </button>
            {showResources && (
              <div
                ref={resourcesRef}
                className="absolute top-[120%] right-0 mt-2 z-50"
              >
                <ProResources />
              </div>
            )}
          </div>

          <a href="#" className="hover:text-indigo-400">
            Become a Freelancer
          </a>
          <FaGlobe className="text-lg hover:text-indigo-400 cursor-pointer" />
          <button className="hover:text-indigo-400">Sign In</button>
          <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 transition">
            Join
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <motion.div
        ref={sidebarRef}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl z-50 p-5 space-y-4"
      >
        <div className="text-2xl font-bold">Miverr Pro.</div>
        <hr className="border-gray-700" />
        <div className="space-y-2">
          {/* Mobile Products */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex justify-between items-center w-full text-left hover:text-indigo-400"
            >
              Products
              <FaChevronDown
                className={`text-xs transition-transform ${
                  mobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="mt-2">
                <ProProducts />
              </div>
            )}
          </div>

          {/* Mobile Plans */}
          <NavLink
            to={"/pro/plans"}
            className="block w-full text-left hover:text-indigo-400"
          >
            Plans
          </NavLink>

          {/* Mobile Resources */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="flex justify-between items-center w-full text-left hover:text-indigo-400"
            >
              Resources
              <FaChevronDown
                className={`text-xs transition-transform ${
                  mobileResourcesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="mt-2">
                <ProResources />
              </div>
            )}
          </div>

          <button className="block w-full text-left hover:text-indigo-400">
            Become a Freelancer
          </button>
          <button className="block w-full text-left hover:text-indigo-400">
            Browse Categories
          </button>
        </div>
        <hr className="border-gray-700" />
        <div className="space-y-1 text-sm">
          <button className="flex items-center gap-2 hover:text-indigo-400">
            <FaGlobe /> Language: English
          </button>
          <button className="hover:text-indigo-400">Currency: USD</button>
        </div>
        <hr className="border-gray-700" />
        <div className="space-y-2">
          <button className="w-full text-center px-4 py-2 rounded-md text-indigo-400 font-semibold hover:bg-indigo-600/10 hover:text-indigo-300 transition-all duration-200">
            Sign In
          </button>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
            Join
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default ProNavbar;
