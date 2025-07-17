import React from 'react';

const SatisfactionBannerSecond = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center items-center text-center px-4">
      <div className="max-w-2xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Hire best-in-class freelance talent on Miverr Pro
        </h2>
        <button
          className="mt-4 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Join Miverr Pro
        </button>
      </div>
    </section>
  );
};

export default SatisfactionBannerSecond;
