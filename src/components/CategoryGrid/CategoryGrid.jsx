import React from "react";
import categories from "../../../public/data/littlecat.json";
import * as FaIcons from "react-icons/fa";
import "./CategoryGrid.css";

const CategoryGrid = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-10/12 mx-auto">
        {/* Flex container with scroll on mobile, side-by-side on PC */}
        <div className="flex md:justify-between gap-2 md:gap-4 overflow-x-auto md:overflow-visible">
          {categories.map(({ id, name, icon }) => {
            const Icon = FaIcons[icon];
            return (
              <div
                key={id}
                className="w-36 cursor-glow p-4 py-10 flex-shrink-0 flex flex-col items-center justify-center bg-gray-100 rounded-md hover:shadow-md transition cursor-pointer group text-center"
              >
                <div className="text-indigo-600 text-base mb-[2px] transition-transform group-hover:scale-110">
                  <Icon />
                </div>
                <p className="break-words break-all whitespace-normal font-medium text-gray-800 group-hover:text-indigo-700 transition px-1 text-center leading-tight">
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
