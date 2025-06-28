import React from "react";
import { MdVerified } from "react-icons/md";

const features = [
  {
    title: "Dedicated hiring experts",
    desc: "Count on an account manager to find you the right talent and see to your project’s every need.",
  },
  {
    title: "Satisfaction guarantee",
    desc: "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.",
  },
  {
    title: "Advanced management tools",
    desc: "Seamlessly integrate freelancers into your team and projects.",
  },
  {
    title: "Flexible payment models",
    desc: "Pay per project or opt for hourly rates to facilitate longer-term collaboration.",
  },
];

const SecondBanner = () => {
  return (
    <section className="bg-white py-12 px-4 w-full ">
      <div className="bg-cyan-100 rounded-2xl py-12 lg:max-w-10/12 mx-auto">
        <div className=" lg:p-12 flex flex-col md:flex-row items-center gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <span className="text-cyan-700 pl-6 font-bold text-2xl mb-4 block">
              Miverr Pro.
            </span>
            <h2 className="text-4xl font-extrabold pl-6 mb-8 leading-snug text-cyan-900">
              The premium freelance solution for businesses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map(({ title, desc }, i) => (
                <div
                  key={i}
                  className="bg-transparent backdrop-blur-3xl p-6 rounded-xl"
                >
                  {/* Responsive layout for badge + title */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-2">
                    {/* Badge on top for lg+ */}
                    <MdVerified
                      className="text-cyan-600 text-2xl mb-1 sm:mb-0 sm:order-1 lg:order-0"
                      aria-label="Verified badge"
                    />
                    {/* Title next to badge on small, below on large */}
                    <h3 className="text-cyan-600 font-semibold text-lg sm:order-2 lg:order-1">
                      {title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-cyan-800 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <button className="bg-cyan-700 ml-6 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-lg transition w-max">
              Try Now
            </button>
          </div>

          {/* Right Side */}
          <div className="flex-1 px-4">
            <img
              src="https://i.postimg.cc/MH4wPH4Z/time-value-money.jpg"
              alt="Professional freelancer"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
