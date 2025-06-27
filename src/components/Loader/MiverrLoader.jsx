import React from 'react';
import { FaBolt } from 'react-icons/fa';

const MiverrLoader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-indigo-500 relative">
        <FaBolt className="text-indigo-500 text-4xl absolute top-5 left-5 animate-pulse drop-shadow-xl" />
      </div>
      <h2 className="mt-6 text-2xl font-bold tracking-wide animate-pulse text-indigo-400">
        Miverr is loading...
      </h2>
    </div>
  );
};

export default MiverrLoader;
