import React from "react";
import { CheckCircle } from "lucide-react";

const earnTiers = [
  {
    title: "Silver",
    heading: "Order services worth up to",
    salary: "$999 annually",
    bonus: "One time only: Earn 1,750+ points for an order over $350.",
    gradient: "from-gray-300 to-gray-100",
    image: "https://i.postimg.cc/c41DHfFX/coin.png",
  },
  {
    title: "Gold",
    heading: "Order services worth",
    salary: "$1,000 - $4,999 annually",
    bonus:
      "Earn 5 points for every $1 spent on an order with a Vetted Pro freelancer.",
    gradient: "from-yellow-400 to-yellow-100",
    image: "https://i.postimg.cc/MH6Yn8mv/coin-11280638.png",
  },
  {
    title: "Platinum",
    heading: "Order services worth",
    salary: "$5,000 - $24,999 annually",
    bonus:
      "Earn 5 points for every $1 spent on an order with any freelancer.\n\nEarn additional 5 points for every $1 on deposits over $10,000.",
    gradient: "from-blue-300 to-white",
    image: "https://i.postimg.cc/YSBY4HpM/platinum.png",
  },
  {
    title: "Diamond",
    heading: "Order services worth over",
    salary: "$25,000 annually",
    bonus:
      "Earn 5 points for every $1 spent on an order with any freelancer.\n\nEarn additional 5 points for every $1 on deposits over $10,000.",
    gradient: "from-purple-500 to-indigo-200",
    image: "https://i.postimg.cc/0NvKk0fN/diamond.png",
  },
];

const bonusList = [
  "Placing an hourly order (100 points)",
  "Inviting team members to the team account (1,000+ points)",
  "Referring colleagues from other departments (1,000+ points) - Coming soon",
];

const ProBusinessHires = () => {
  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-6 space-y-16">
      {/* Steps */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {["Hire freelancers", "Earn points", "Redeem rewards"].map(
          (item, idx) => (
            <div key={idx} className="text-center space-y-3">
              <div className="text-5xl font-bold text-gradient">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="text-xl font-medium">{item}</div>
            </div>
          )
        )}
      </div>

      {/* Earn Points Tiers */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {earnTiers.map((tier, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 bg-[#1c1c1c] rounded-xl shadow-xl p-6 hover:scale-[1.02] transition"
          >
            {/* Image Block */}
            <div
              className={`p-4 rounded-lg bg-gradient-to-br ${tier.gradient} flex-shrink-0`}
            >
              <img
                src={tier.image}
                alt={tier.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Content Block */}
            <div className="text-left space-y-2">
              <h3 className="text-xl font-bold">{tier.title}</h3>
              <p className="text-sm text-gray-300">{tier.heading}</p>
              <p className="text-base font-semibold">{tier.salary}</p>
              <p className="text-sm text-gray-400 whitespace-pre-line">
                {tier.bonus}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider with extra ways to earn */}
      <div className="max-w-3xl mx-auto space-y-6">
        <hr className="border-gray-700" />
        <h3 className="text-2xl font-bold text-center">
          In addition, all clients can earn points by:
        </h3>
        <ul className="text-gray-300 space-y-2 text-sm">
          {bonusList.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-1 text-green-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
          Join Miverr Pro
        </button>
      </div>
    </section>
  );
};

export default ProBusinessHires;
