import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth/useAuth";
import MiverrLoader from "../../../components/Loader/MiverrLoader";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const { loading, signInUser } = useAuth();
  const navigate = useNavigate();

  const adminEmail = import.meta.env.VITE_REACT_APP_ADMIN_EMAIL;
  const adminPass = import.meta.env.VITE_REACT_APP_ADMIN_PASSWORD;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === adminEmail && password === adminPass) {
      try {
        const res = await signInUser(email, password);
        if (res.user) {
          toast.success("Logged in successfully!");
          navigate("/admin-dashboard");
        }
      } catch (error) {
        Swal.fire("Login Failed", error.message, "error");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Invalid admin credentials!",
      });
    }
  };

  if (loading) return <MiverrLoader />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-sm md:max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <div className="text-center mb-6">
          <FaUserShield className="mx-auto text-4xl text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Admin Login</h2>
          <p className="text-sm text-gray-500">Access your Miverr dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="admin@miverr.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg placeholder:text-gray-500 text-black font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 pr-10 border rounded-lg placeholder:text-gray-500 text-black font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Miverr. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
