import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const StickyCategoryNav = ({ categories, isVisible }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed z-40 w-full bg-white shadow transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: "64px" }}
    >
      <div className="max-w-10/12 mx-auto relative flex items-center px-4 py-2">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-700 absolute -left-4 top-1/2 -translate-y-1/2 z-20"
          aria-label="Scroll Left"
        >
          <FaChevronLeft size={16} />
        </button>

        {/* Scrollable Button List */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-10 w-full"
          style={{ scrollPaddingLeft: "48px", scrollPaddingRight: "48px" }}
          tabIndex={0} // make focusable for accessibility
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              className="text-sm font-medium px-4 py-1.5 bg-gray-100 rounded-full hover:bg-indigo-100 transition text-gray-800 whitespace-nowrap"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-700 absolute -right-4 top-1/2 -translate-y-1/2 z-20"
          aria-label="Scroll Right"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default StickyCategoryNav;
