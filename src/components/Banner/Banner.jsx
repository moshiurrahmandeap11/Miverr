import React from "react";

const Banner = () => {
  return (
    <section className="bg-white w-full min-h-[400px] flex justify-center items-center py-8 px-4">
      <div className="lg:w-10/12 flex flex-col-reverse  lg:flex-row h-full rounded-2xl overflow-hidden shadow-lg">
        {/* Left Side */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-10 text-white"
          style={{
            background: "linear-gradient(to bottom left, black 20%, orange 80%)",
          }}
        >
          <span className="text-orange-400 font-bold text-xl sm:text-2xl mb-2">
            Miverr Go.
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug">
            Instant results.
            <br />
            Top talent.
          </h1>
          <p className="mb-6 max-w-full sm:max-w-md text-gray-300 text-sm sm:text-base">
            Get what you need faster from freelancers who trained their own
            personal AI Creation Models. Now you can browse, prompt, and
            generate instantly. And if you need a tweak or change, the
            freelancer is always there to help you perfect it.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-8 rounded-lg w-max transition self-start">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-6">
          <video
            className="w-full max-w-md lg:max-w-full rounded-lg shadow-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
