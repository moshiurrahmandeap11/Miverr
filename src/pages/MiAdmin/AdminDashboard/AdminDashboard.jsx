import React from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import MiverrLoader from '../../../components/Loader/MiverrLoader';
import { FaUserCircle, FaTachometerAlt, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
  const { user, loading, logOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser().then(() => {
        toast.success("Logged Out")
        navigate('/admin-login')
    })
  }

  if (loading) return <MiverrLoader />;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Miverr Admin</h1>
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-2xl text-indigo-500" />
          <span className="font-medium text-gray-700 text-sm hidden sm:inline">{user?.email}</span>
          <button
            onClick={handleLogOut}
            className="ml-4 text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md transition"
          >
            <FaSignOutAlt className="inline mr-1" /> Logout
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-md hidden md:block">
          <nav className="flex flex-col p-4 gap-2">
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium">
              <FaTachometerAlt /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium">
              <FaCogs /> Settings
            </a>
            {/* Add more links here */}
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Welcome, Admin</h2>
            <p className="text-sm text-gray-500 mt-1">
              Here's what’s happening with Miverr today.
            </p>
          </div>

          {/* Sample Dashboard Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="text-3xl mt-2 font-bold text-indigo-600">324</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Pending Orders</h3>
              <p className="text-3xl mt-2 font-bold text-yellow-500">12</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Earnings</h3>
              <p className="text-3xl mt-2 font-bold text-green-500">$1,230</p>
            </div>
          </div>

          {/* Placeholder for charts, recent activity, etc. */}
          <div className="mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <div className="text-sm text-gray-500 mt-2">No recent activity to show.</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
