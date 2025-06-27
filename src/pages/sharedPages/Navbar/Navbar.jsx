import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaEnvelope,
  FaHeart,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router"; // fixed import
import SignUpModal from "../../../components/SignUpModal/SignUpModal";
import SignInModal from "../../../components/SignInModal/SignInModal";
import useAuth from "../../../Hooks/useAuth/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [modalType, setModalType] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
const toggleMenu = () => setMenuOpen(!menuOpen);

  const openSignUp = () => setModalType("signup");
  const openSignIn = () => setModalType("signin");
  const closeModal = () => setModalType(null);

  const handleLogout = () => {
    logOutUser()
      .then(() => toast.success("Logged out"))
      .catch(() => toast.error("Logout failed"));
  };

  const handleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className="bg-white text-black shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-y-4">
        <NavLink to="/" className="text-2xl font-bold text-indigo-600">
          Miverr
        </NavLink>

        {!user && (
          <div className="hidden lg:flex gap-6 items-center font-medium text-gray-700">
            {[
              { key: "pro", label: "Miverr Pro", items: ["Business", "Freelancers"] },
              { key: "explore", label: "Explore", items: ["Marketplace", "Trending"] },
              { key: "lang", label: "English", items: ["বাংলা", "Español"] },
            ].map(({ key, label, items }) => (
              <div key={key} className="relative">
                <button
                  onClick={() => handleDropdown(key)}
                  className="flex items-center gap-1 hover:text-indigo-600"
                >
                  {label} <FaChevronDown className="text-sm mt-0.5" />
                </button>
                {dropdownOpen === key && (
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg p-3 z-50">
                    {items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block hover:text-indigo-600"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="hover:text-indigo-600">
              Become a Seller
            </a>
            <button onClick={openSignIn} className="hover:text-indigo-600 cursor-pointer">
              Sign In
            </button>
            <button
              onClick={openSignUp}
              className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        )}

        {user && (
          <div className="flex flex-1 items-center gap-4 justify-end flex-wrap">
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="hidden md:block flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <FaBell className="text-gray-600 text-xl cursor-pointer hidden sm:block" />
            <FaEnvelope className="text-gray-600 text-xl cursor-pointer hidden sm:block" />
            <FaHeart className="text-gray-600 text-xl cursor-pointer hidden sm:block" />
            <button className="text-sm font-medium hidden md:block">Orders</button>
            <button className="text-sm font-medium hidden md:block">
              Switch to Selling
            </button>

            <div className="relative">
              <img
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                src={user.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"}
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
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100">
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
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100">
                      {item}
                    </a>
                  ))}
                  <hr className="my-1" />
                  {[
                    "Language: English",
                    "Currency: $USD",
                    "Help & Support",
                  ].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100">
                      {item}
                    </a>
                  ))}
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="w-full cursor-pointer text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
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
    </header>
  );
};

export default Navbar;
