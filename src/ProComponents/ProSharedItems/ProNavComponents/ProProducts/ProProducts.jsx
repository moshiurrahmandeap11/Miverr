import React from "react";
import { motion } from "framer-motion";

const ProProducts = () => {
  const benefits = [
    "Freelance talent hiring",
    "Collaboration tools",
    "Satisfaction guarantee",
    "Business rewards program",
    "Miverr Enterprise",
  ];

  const tailored = [
    "Expert sourcing",
    "Project planning",
    "Project management",
    "Compliance",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-[400px] rounded-xl p-6 flex flex-col lg:flex-row gap-6 text-sm
                 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                 shadow-lg"
    >
      {/* Left Side - Benefits */}
      <div className="flex-1 space-y-3">
        <h3 className="text-base font-semibold text-indigo-400 mb-2">
          Key Benefits
        </h3>
        {benefits.map((item, i) => (
          <p
            key={i}
            className="text-gray-300 hover:text-indigo-300 cursor-pointer transition-all duration-200"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px bg-indigo-600/40" />

      {/* Right Side - Tailored */}
      <div className="flex-1 space-y-3">
        <h3 className="text-base font-semibold text-indigo-400 mb-2">
          Tailored Services
        </h3>
        {tailored.map((item, i) => (
          <p
            key={i}
            className="text-gray-300 hover:text-indigo-300 cursor-pointer transition-all duration-200"
          >
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProProducts;
