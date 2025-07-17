import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

const ProBusinessBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const chartData = [
    { label: "Silver", height: 80 },
    { label: "Gold", height: 128 },
    { label: "Platinum", height: 176 },
    { label: "Diamond", height: 224 },
  ];

  const gradientMap = {
    Silver: "from-[#C0C0C0] to-[#E0E0E0]",
    Gold: "from-[#FFD700] to-[#FFF5B7]",
    Platinum: "from-[#B0E0E6] to-[#E6F0FF]",
    Diamond: "from-[#BA55D3] to-[#FFCCE5]",
  };

  const stickerCircleBg = {
    Silver: "bg-[#C0C0C0] text-black",
    Gold: "bg-[#FFD700] text-black",
    Platinum: "bg-[#B0E0E6] text-black",
    Diamond: "bg-[#BA55D3] text-white",
  };

  return (
    <section
      className="w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0c0c0c] text-white py-20 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-16">
        {/* Left Content */}
        <div
          className="flex-1 space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get more done with Business Rewards
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            With Miverr Pro’s Business Rewards program, you can now earn points
            for every order and redeem them for exclusive rewards such as Fiverr
            Credits, gift cards, and even charitable donations.
          </p>
          <button className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
            Join Miverr Pro
          </button>
        </div>

        {/* Right Chart Visual with Circle Stickers */}
        <div
          className="flex-1 flex items-end justify-center gap-6 h-[260px] relative"
          data-aos="fade-left"
        >
          {chartData.map(({ label, height }, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              {/* Circle Badge */}
              <div
                className={`absolute -top-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${stickerCircleBg[label]}`}
              >
                <CheckCircle className="w-5 h-5" strokeWidth={2.2} />
              </div>

              {/* Bar */}
              <div
                className={`w-10 rounded-md shadow-md bg-gradient-to-t ${gradientMap[label]}`}
                style={{ height: `${height}px` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProBusinessBanner;
