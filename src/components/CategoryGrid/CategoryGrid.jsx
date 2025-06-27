import React from "react";
import categories from "../../../public/data/littlecat.json";
import * as FaIcons from "react-icons/fa";
import "./CategoryGrid.css";

const CategoryGrid = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map(({ id, name, icon }) => {
            const Icon = FaIcons[icon];
            return (
              <div
                key={id}
                className="category-box cursor-pointer cursor-glow group p-3 sm:p-4 bg-gray-100 rounded-md hover:shadow-md transition relative overflow-hidden text-center"
              >
                <div className="text-indigo-600 text-xl sm:text-2xl mb-1 transition-transform group-hover:scale-110 mx-auto">
                  <Icon />
                </div>
                <p className="text-[12px] sm:text-sm font-medium text-gray-800 group-hover:text-indigo-700 transition truncate">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
