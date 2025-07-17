import React, { useState } from "react";
import { Link } from "react-router"; // If you're using react-router-dom v6+, use NavLink or Link from 'react-router-dom'
import data from "../../../../../public/data/categories.json";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SubFooter = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleSection = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 text-white">
      <div className="w-10/12 mx-auto">
        {/* Desktop view: grid */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {data.map(({ title, items }, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.link}
                      className="text-gray-300 hover:text-indigo-400 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile view: collapsible */}
        <div className="md:hidden space-y-4">
          {data.map(({ title, items }, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800"
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-white"
                  onClick={() => toggleSection(index)}
                >
                  <span>{title}</span>
                  {isOpen ? (
                    <FaChevronUp className="text-sm" />
                  ) : (
                    <FaChevronDown className="text-sm" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="px-4 py-2 space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.link}
                          className="text-gray-300 hover:text-indigo-400 transition"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
