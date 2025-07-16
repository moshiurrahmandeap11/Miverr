import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaEnvelope,
  FaHeart,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import { NavLink } from "react-router";

import SignInModal from "../../../components/SignInModal/SignInModal";
import useAuth from "../../../Hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import { useScrollState } from "../../../Providers/ScrollContext/ScrollContext";
import topNav from "../../../../public/data/topNav.json";
import SignUpModal from "../../../components/SignUpMOdal/SignUpModal";
import MiverPro from "../../../components/NavbarItems/MiverPro/MiverPro";
import Explore from "../../../components/NavbarItems/Explore/Explore";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [modalType, setModalType] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);

  const { showStickySearch } = useScrollState();
  const toggleBrowse = () => setBrowseOpen((prev) => !prev);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openSignUp = () => setModalType("signup");
  const openSignIn = () => setModalType("signin");
  const closeModal = () => setModalType(null);
  const toggleExplore = () => setExploreOpen((prev) => !prev);
  const togglePro = () => setProOpen((prev) => !prev);

  const handleLogout = () => {
    logOutUser()
      .then(() => toast.success("Logged out"))
      .catch(() => toast.error("Logout failed"));
  };

  const handleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-white text-black shadow-sm sticky top-0 z-50 lg:border-b">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-y-4">
        {/* Hamburger Menu on Mobile - LEFT */}
        <div className="flex items-center gap-4 flex-1 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-indigo-600">
            Miverr
          </NavLink>
          {!user && (
            <div className="ml-auto lg:hidden">
              <button
                onClick={openSignUp}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
              >
                Join
              </button>
            </div>
          )}
        </div>

        {/* Logo for large screen */}
        <NavLink
          to="/"
          className="hidden lg:block text-2xl font-bold text-indigo-600"
        >
          Miverr
        </NavLink>

        {/* Sticky Search Bar for Non-Logged-in Users */}
        {!user && showStickySearch && (
          <div className="flex-1 max-w-xl hidden lg:flex ml-4">
            <div className="flex w-full bg-gray-100 rounded-full items-center shadow px-4 py-2">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search for any service"
                className="flex-1 bg-transparent outline-none text-sm text-gray-800"
              />
              <button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm hover:bg-green-700 transition">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Nav Items - Guest */}
        {!user && (
          <div className="hidden lg:flex gap-6 items-center font-medium text-gray-700">
            {[
              {
                key: "pro",
                label: "Miverr Pro",
                content: <MiverPro />,
              },
              {
                key: "explore",
                label: "Explore",
                content: <Explore></Explore>,
              },
              {
                key: "lang",
                label: "English",
                content: (
                  <div className="w-40 bg-white shadow-lg p-3 rounded-md space-y-2">
                    <a href="#" className="block hover:text-indigo-600">
                      বাংলা
                    </a>
                    <a href="#" className="block hover:text-indigo-600">
                      Español
                    </a>
                  </div>
                ),
              },
            ].map(({ key, label, content }) => (
              <div key={key} className="relative">
                <button
                  onClick={() => handleDropdown(key)}
                  className="flex items-center gap-1 px-3 py-1.5 cursor-pointer rounded-md transition hover:bg-gray-100 text-gray-700 hover:text-indigo-600"
                >
                  {label} <FaChevronDown className="text-sm mt-0.5" />
                </button>

                {dropdownOpen === key && (
                  <div className="absolute right-0 mt-3 z-50">{content}</div>
                )}
              </div>
            ))}
            <a href="#" className="hover:text-indigo-600">
              Become a Seller
            </a>
            <button
              onClick={openSignIn}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={openSignUp}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        )}

        {/* Nav Items - Logged In */}
        {user && (
          <div className="flex flex-1 items-center gap-4 justify-end flex-wrap">
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="hidden md:block flex-1 ml-4 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <FaBell className="text-gray-600 text-xl cursor-pointer hidden sm:block" />
            <FaEnvelope className="text-gray-600 text-xl cursor-pointer hidden sm:block" />
            <FaHeart className="text-gray-600 text-xl cursor-pointer hidden sm:block" />
            <button className="text-sm font-medium hidden md:block">
              Orders
            </button>
            <button className="text-sm font-medium hidden md:block">
              Switch to Selling
            </button>

            <div className="relative">
              <img
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                src={
                  user.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"
                }
                className="w-9 h-9 rounded-full cursor-pointer object-cover"
                alt="avatar"
              />

              {profileMenuOpen && (
                <div className="absolute right-0 top-12 w-64 bg-white shadow-lg border rounded-md py-2 z-50 text-sm">
                  {[
                    "Profile",
                    "Post a project brief",
                    "Your briefs",
                    "Dashboard",
                    "Refer a friend",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                  <hr className="my-1" />
                  {[
                    "Settings",
                    "Billing & Payments",
                    "Invite your team",
                    "Let us manage your project",
                    "Money-back guarantee",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                  <hr className="my-1" />
                  {[
                    "Language: English",
                    "Currency: $USD",
                    "Help & Support",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Auth Modals */}
      {modalType === "signup" && (
        <SignUpModal
          onClose={closeModal}
          onSwitchToSignIn={() => setModalType("signin")}
        />
      )}
      {modalType === "signin" && (
        <SignInModal
          onClose={closeModal}
          onSwitchToSignUp={() => setModalType("signup")}
        />
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[60] shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-4">
          <button
            onClick={openSignUp}
            className="bg-indigo-600 w-full text-base text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Join Miverr
          </button>
          <div className="space-y-2">
            <button
              onClick={openSignIn}
              className="block w-full font-semibold text-left text-gray-700"
            >
              Sign In
            </button>
          </div>
          <div>
            <button
              onClick={toggleBrowse}
              className="w-full text-left font-bold  text-black mb-2 flex justify-between items-center"
            >
              Browse Categories
              <span>{browseOpen ? "▲" : "▼"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                browseOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-1 pl-2 text-sm pt-1">
                {topNav.map((cat, i) => (
                  <button
                    key={i}
                    className="block w-full text-left text-gray-800 hover:text-indigo-600"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            {/* Explore */}
            <div>
              <button
                onClick={toggleExplore}
                className="w-full text-left font-bold text-black mb-2 flex justify-between items-center"
              >
                Explore
                <span>{exploreOpen ? "▲" : "▼"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  exploreOpen
                    ? "max-h-[400px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-2 pt-1">{exploreOpen && <Explore />}</div>
              </div>
            </div>

            {/* Miverr Pro */}
            <div>
              <button
                onClick={togglePro}
                className="w-full text-left font-bold text-black mb-2 flex justify-between items-center"
              >
                Miverr Pro
                <span>{proOpen ? "▲" : "▼"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  proOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-2 pt-1">{proOpen && <MiverPro />}</div>
              </div>
            </div>
          </div>

          {/* Miverr Pro */}
          <div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                proOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-1 pl-2 text-sm pt-1">
                <a
                  href="#"
                  className="block w-full text-left text-gray-800 hover:text-indigo-600"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="block w-full text-left text-gray-800 hover:text-indigo-600"
                >
                  Freelancers
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold mb-2">General</h3>
            <div className="space-y-1 text-sm">
              <a href="#" className="block hover:text-indigo-600">
                Home
              </a>
              <a href="#" className="block hover:text-indigo-600">
                Language: English
              </a>
              <a href="#" className="block hover:text-indigo-600">
                Currency: $USD
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
