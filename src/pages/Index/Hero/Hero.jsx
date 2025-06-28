import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import videofile from "../../../assets/bg-video.mp4";
import { useScrollState } from "../../../Providers/ScrollContext/ScrollContext";

const Hero = () => {
  const searchRef = useRef();
  const { setShowStickySearch } = useScrollState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickySearch(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (searchRef.current) observer.observe(searchRef.current);
    return () => searchRef.current && observer.unobserve(searchRef.current);
  }, [setShowStickySearch]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden text-white">
      {/* Video only for md+ */}
      <video
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videofile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for video (only on md+) */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Mobile fallback background */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-green-900 to-green-700 z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto h-full px-4 flex flex-col justify-center items-center text-center space-y-6">
        {/* Heading */}
        <h1 className="text-3xl px-5 sm:text-4xl md:text-5xl font-bold leading-tight">
          Our freelancers
          <br className="hidden sm:block" /> will take it from here
        </h1>

        {/* Search Box */}
        <div ref={searchRef} className="w-full max-w-2xl">
          <div className="flex bg-white rounded-2xl overflow-hidden items-center shadow-lg mt-4">
            <FaSearch className="text-gray-400 text-xl mx-4" />
            <input
              type="text"
              placeholder="Search for any service"
              className="flex-1 py-3 px-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-6 py-3 text-sm font-semibold hover:bg-green-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Categories (hidden on phones) */}
        <div className="hidden sm:flex mt-6 flex-wrap gap-3 justify-center text-sm">
          {[
            "Website Development",
            "Architecture & Interior Design",
            "UGC Videos",
            "Video Editing",
          ].map((category) => (
            <button
              key={category}
              className="bg-white/90 text-black px-4 py-1.5 rounded-full hover:bg-white transition font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Trusted By (hidden on phones) */}
        <div className="hidden sm:flex mt-10 flex-col items-center gap-3">
          <p className="text-sm text-gray-200">Trusted by:</p>
          <div className="flex gap-8 flex-wrap justify-center items-center">
            {[
              "https://i.postimg.cc/fyVhK34B/03de3d1a-e0f1-4da5-b879-967afbc550bd-removebg-preview.png",
              "https://i.postimg.cc/sfb2Lznv/Meta-Logo.png",
              "https://i.postimg.cc/YSy7mNZh/Logonetflix.png",
              "https://i.postimg.cc/VvWHXmvD/Airbnb-Logo-wine.png",
              "https://i.postimg.cc/gJvMPmVm/Shopify-Logo.png",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="company logo"
                className="h-10 sm:h-12 md:h-14 max-w-[120px] object-contain brightness-110 hover:brightness-125 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
