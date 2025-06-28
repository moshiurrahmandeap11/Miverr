import React, { useState } from "react";
import { FaHeart, FaEllipsisV } from "react-icons/fa";
import images from "../../../public/data/madeonmiverr.json";

const MadeOnMiverr = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white">
      <div className="lg:w-10/12 px-4 mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Made On Miverr</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map(({ id, url, name, creator }) => (
            <div
              key={id}
              className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={url}
                alt={name}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent">
                {/* Top Right Heart */}
                <div className="flex justify-end p-2">
                  <button
                    className="bg-white p-2 rounded-full shadow text-red-500 hover:scale-110 transition"
                    aria-label="Add to Wishlist"
                  >
                    <FaHeart />
                  </button>
                </div>

                {/* Bottom Info */}
                <div className="w-full px-3 pb-3 text-white text-sm">
                  <div className="flex justify-between items-end">
                    {/* Name & Creator */}
                    <div>
                      <p className="font-semibold truncate">{name}</p>
                      <p className="text-xs text-gray-300 truncate">by {creator}</p>
                    </div>

                    {/* 3 Dot Menu */}
                    <div className="relative z-10">
                      <button
                        onClick={() => toggleDropdown(id)}
                        className="p-2 bg-black/50 cursor-pointer hover:bg-black/70 rounded-full transition"
                        aria-label="Options"
                      >
                        <FaEllipsisV />
                      </button>

                      {activeDropdown === id && (
                        <div className="absolute right-0 mt-2 bg-white text-black cursor-pointer text-sm rounded shadow-md z-50 min-w-[100px]">
                          <button className="block w-full px-4 py-2 hover:bg-gray-100 text-left">
                            See Gig
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadeOnMiverr;
