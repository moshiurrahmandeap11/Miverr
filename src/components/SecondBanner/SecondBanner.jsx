import React from "react";

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
    <section className="bg-white py-12 w-full ">
      <div className="bg-cyan-100 rounded-2xl py-12 max-w-10/12 mx-auto">
        <div className="w-9/12 mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <span className="text-cyan-700 font-bold text-2xl mb-4 block">
              Miverr Pro.
            </span>
            <h2 className="text-4xl font-extrabold mb-8 leading-snug text-cyan-900">
              The premium freelance solution for businesses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map(({ title, desc }, i) => (
                <div
                  key={i}
                  className="bg-transparent backdrop-blur-3xl p-6 rounded-xl shadow-md flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 text-cyan-600 font-semibold text-lg">
                    <span>✅</span>
                    <span>{title}</span>
                  </div>
                  <p className="text-cyan-800 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-lg transition w-max">
              Try Now
            </button>
          </div>

          {/* Right Side */}
          <div className="flex-1">
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
