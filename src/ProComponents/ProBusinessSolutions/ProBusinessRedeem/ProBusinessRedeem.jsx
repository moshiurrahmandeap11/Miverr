import React from "react";
import { CheckCircle } from "lucide-react";

const rewards = [
  {
    title: "Get the Fiverr Pro Essential plan for an additional year",
    silver: false,
    gold: true,
    platinum: true,
    diamond: true,
  },
  {
    title: "Redeem points for Fiverr Credits you can use on your next order",
    silver: true,
    gold: true,
    platinum: true,
    diamond: true,
  },
  {
    title: "Redeem points for a variety of gift cards for you or your team members",
    silver: false,
    gold: true,
    platinum: true,
    diamond: true,
  },
  {
    title: "Redeem your points to donate to a listed charity",
    silver: false,
    gold: false,
    platinum: true,
    diamond: true,
  },
  {
    title: "Get free project planning worth up to $1,200",
    silver: false,
    gold: false,
    platinum: true,
    diamond: true,
  },
  {
    title: "Work with a dedicated Business Success Manager",
    silver: false,
    gold: false,
    platinum: true,
    diamond: true,
  },
  {
    title: "Connect with your Success Manager via a private Slack channel",
    silver: false,
    gold: false,
    platinum: true,
    diamond: true,
  },
  {
    title: "Get a taste of the Advanced plan and compliance tools for free",
    silver: false,
    gold: false,
    platinum: false,
    diamond: true,
  },
  {
    title: "Enjoy exclusive seasonal benefits",
    silver: false,
    gold: false,
    platinum: false,
    diamond: true,
  },
];

const tierImages = {
  silver: "https://i.postimg.cc/c41DHfFX/coin.png",
  gold: "https://i.postimg.cc/MH6Yn8mv/coin-11280638.png",
  platinum: "https://i.postimg.cc/YSBY4HpM/platinum.png",
  diamond: "https://i.postimg.cc/0NvKk0fN/diamond.png",
};

const ProBusinessRedeem = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#111111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">Redeem Rewards</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="p-4 text-lg">Reward</th>
                {["silver", "gold", "platinum", "diamond"].map((tier, idx) => (
                  <th key={idx} className="p-4 text-center">
                    <img
                      src={tierImages[tier]}
                      alt={`${tier} icon`}
                      className="w-10 h-10 mx-auto object-contain"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {rewards.map((reward, i) => (
                <tr key={i} className="hover:bg-[#1a1a1a] transition duration-200">
                  <td className="p-4 text-sm text-gray-300 max-w-md">{reward.title}</td>
                  {["silver", "gold", "platinum", "diamond"].map((tier, j) => (
                    <td key={j} className="p-4 text-center">
                      {reward[tier] && (
                        <CheckCircle className="text-green-400 w-5 h-5 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProBusinessRedeem;
