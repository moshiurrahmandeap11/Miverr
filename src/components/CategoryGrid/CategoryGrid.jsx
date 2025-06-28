import React, { useState, useEffect } from "react";
import categories from "../../../public/data/littlecat.json";
import * as FaIcons from "react-icons/fa";
import "./CategoryGrid.css";

const CategoryGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCategories =
    isMobile && !showAll ? categories.slice(0, 6) : categories;

  return (
    <section className="py-10 px-4 bg-white">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
          {visibleCategories.map(({ id, name, icon }) => {
            const Icon = FaIcons[icon];
            return (
              <div
                key={id}
                className="flex flex-col items-center group text-center transition"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-100 group-hover:shadow-md transition-transform group-hover:scale-105">
                  <Icon className="text-indigo-600 text-xl sm:text-2xl" />
                </div>

                {/* Name Below */}
                <p className="mt-2 text-sm sm:text-base font-medium text-gray-800 group-hover:text-indigo-700 leading-tight">
                  {name}
                </p>
              </div>
            );
          })}
        </div>

        {isMobile && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-indigo-600 font-medium underline hover:text-indigo-800 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryGrid;
