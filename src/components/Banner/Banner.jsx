import React from "react";

const Banner = () => {
  return (
    <section className="flex justify-center bg-white h-[400px] w-full">
      <div className="w-10/12 flex h-full">
        {/* Left Side */}
        <div
          className="w-1/2 rounded-l-2xl flex flex-col justify-center px-12 text-white"
          style={{
            background: "linear-gradient(to bottom left, black 20%, orange 80%)",
          }}
        >
          <span className="text-orange-400 font-bold text-2xl mb-2">
            Miverr Go.
          </span>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Instant results.
            <br />
            Top talent.
          </h1>
          <p className="mb-6 max-w-md text-gray-300">
            Get what you need faster from freelancers who trained their own
            personal AI Creation Models. Now you can browse, prompt, and
            generate instantly. And if you need a tweak or change, the
            freelancer is always there to help you perfect it.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-8 rounded-lg w-max transition">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="w-9/12 rounded-r-2xl flex items-center justify-center bg-black">
          <video
            className="w-7/12 max-h-full rounded-lg shadow-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
