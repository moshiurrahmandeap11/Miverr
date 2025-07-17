import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import SatisfactionSponsor from "./SatisfactionSponsor/SatisfactionSponsor";

const SatisfactionBanner = () => {
  return (
    <section>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 lg:px-16 py-10 lg:flex items-center justify-between overflow-hidden relative shadow-2xl gap-8">
          {/* Left Side Content */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              High-quality work,<br /> or your money back
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Miverr Pro's freelance talent delivers high-quality work. If you’re not
              satisfied with the deliverables, we’ll refund you.
            </p>
    
            <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full font-medium text-white shadow-lg">
              Join Miverr Pro
            </button>
    
            <p className="text-sm text-gray-400 mt-1">
              *Every eligible order from a Fiverr Pro freelancer
            </p>
          </div>
    
          {/* Right Side Image with Shadow & Sticker */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center relative">
            {/* Shadow Image with padding inside border */}
            <div className="relative p-5 group rounded-xl border-4 border-gradient-to-r border-indigo-700 shadow-xl bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900">
              <img
                src="https://i.postimg.cc/PqXrvdxn/drew-hays-ag-GIKYs4m-Ys-unsplash.jpg"
                alt="Freelancer"
                className="w-[480px] h-[340px] object-cover rounded-lg shadow-inner"
              />
    
              {/* Refund Badge */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border-2 border-white">
                <BsArrowRepeat className="text-white text-xl rotate-180" />
                <div className="text-sm font-semibold">100% Refund</div>
              </div>
    
              {/* Verified Badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <FaCheckCircle />
                Verified
              </div>
            </div>
          </div>
        </div>
          <SatisfactionSponsor></SatisfactionSponsor>
    </section>
  );
};

export default SatisfactionBanner;
