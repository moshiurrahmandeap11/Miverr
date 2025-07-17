import React from "react";
import { motion } from "framer-motion";

const MiverPro = () => {
  const features = [
    {
      title: "Satisfaction guarantee",
      desc: "Money-back when working with vetted freelancers.",
      img: "https://i.postimg.cc/jSsbBYg2/atm-card.png",
      navigate_link: "/pro/satisfaction-guarantee",
    },
    {
      title: "Pro Business Rewards program",
      desc: "Each order brings you closer to exclusive perks.",
      img: "https://i.postimg.cc/BZHf6nRt/crown.png",
      navigate_link: "/pro/pro-business-solutions",
    },
    {
      title: "Sourcing services",
      desc: "Experts vet and interview talent for you.",
      img: "https://i.postimg.cc/1znYjWQ4/audit.png",
      navigate_link: "/pro/sourcing",
    },
    {
      title: "Collaboration and payments",
      desc: "Collaborate with your team, manage budgets, and hire flexibly.",
      img: "https://i.postimg.cc/SNQ4vpts/teamwork.png",
      navigate_link: "/pro/collaboration",
    },
  ];


  const baseURL = "http://localhost:5173";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.25 }}
      className="w-[460px] bg-white lg:shadow-2xl rounded-2xl lg:px-8 py-7 space-y-7"
    >
      {/* Header */}
      <h2 className="hidden lg:block text-lg font-semibold text-indigo-600">
        Hire vetted freelance talent on{" "}
        <span className="text-indigo-800">Miverr Pro</span>
      </h2>

      {/* Features */}
      <div className="space-y-6">
        {features.map((f, i) => (
          <div
            key={i}
            onClick={() => window.open(`${baseURL}${f.navigate_link}`, "_blank")}
            className="flex items-start gap-5 hover:underline cursor-pointer p-3 rounded-md transition"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-11 h-11 object-contain hidden lg:block"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="hidden lg:block text-sm text-gray-600 leading-snug">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Offer Section */}
      <h1 className="hidden lg:block text-lg font-semibold text-indigo-600">
        Find work on Fiverr Pro
      </h1>
      <div
        onClick={() => window.open(`${baseURL}/pro/offer-services`, "_blank")}
        className="hidden lg:flex items-start gap-5 hover:underline cursor-pointer"
      >
        <img
          className="w-11 h-11 object-contain"
          src="https://i.postimg.cc/cHJ6W8FK/profile.webp"
          alt="Pro Offer"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Offer Pro services
          </h3>
          <p className="text-sm text-gray-600 leading-snug">
            Miverr Pro connects top freelancers to exclusive opportunities.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MiverPro;
