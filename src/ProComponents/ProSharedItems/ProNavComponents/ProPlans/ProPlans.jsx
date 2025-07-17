import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProFaq from "./ProFaq/ProFaq";

const planCards = [
  {
    id: 1,
    title: "Perfect for finding skilled freelancers worldwide for any project and budget.",
    subtitle: "Available for everyone",
    buttonText: "Go to Miverr",
    buttonClass: "bg-indigo-600 hover:bg-indigo-700",
    benefitsTitle: "Key benefits",
    benefits: [
      "On-demand, global freelance talent",
      "Verified work history and reviews",
      "Instant freelancer matching",
      "Clear scope and upfront pricing per project",
      "1 person per account",
      "Wide range of price points",
      "24/7 support from a dedicated team",
    ],
    cardClass: "bg-gradient-to-b from-gray-800 to-gray-900",
    textColorClass: "text-indigo-300",
    subtitleClass: "text-indigo-400",
  },
  {
    id: 2,
    title: "Ideal for those seeking vetted freelance talent or hands-on hiring services.",
    subtitle: "Based on eligibility",
    subtitleNote: "*Maintain your eligibility by ordering services worth $1,000 or more annually.",
    buttonText: "Join Miverr Pro",
    buttonClass: "bg-indigo-500 hover:bg-indigo-600",
    benefitsTitle: "Everything on Miverr, plus:",
    benefits: [
      "Vetted freelance talent catalog",
      "Money-back guarantee",
      "Freelancer shortlisting services by Fiverr Pro experts",
      "Hourly or project-based hiring",
      "Team account with unlimited members",
      "Earn points on orders and redeem them for exclusive rewards",
      "25% discount on sourcing services by domain experts",
    ],
    cardClass: "bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 border-2 border-indigo-500",
    textColorClass: "text-indigo-200",
    subtitleClass: "text-indigo-400",
  },
  {
    id: 3,
    title: "Tailored for compliant hiring while providing advanced management tools.",
    subtitle: "$129/month",
    buttonText: "Contact Us",
    buttonClass: "border border-indigo-600 hover:bg-indigo-700",
    benefitsTitle: "Everything in Essential, plus:",
    benefits: [
      "Unlimited legal document management",
      "Support from a dedicated Business Success Manager",
      "1 background check and worker classification audit per month",
    ],
    cardClass: "bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800",
    textColorClass: "text-indigo-300",
    subtitleClass: "text-indigo-400",
  },
];

const ProPlans = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="fade-down"
          className="text-3xl font-extrabold text-indigo-400 mb-2 max-w-xl mx-auto text-center"
        >
          A suite of plans, tailored to your <br /> business needs
        </h2>
        <p
          data-aos="fade-up"
          className="text-indigo-300 mb-10 max-w-md mx-auto text-center"
        >
          Select the plan that aligns with your goals
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-12 items-center">
          {planCards.map(
            (
              {
                id,
                title,
                subtitle,
                subtitleNote,
                buttonText,
                buttonClass,
                benefitsTitle,
                benefits,
                cardClass,
                textColorClass,
                subtitleClass,
              },
              idx
            ) => (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`${cardClass} rounded-xl p-6 flex flex-col justify-between shadow-xl h-full`}
              >
                <div>
                  <h3 className={`text-lg font-semibold ${textColorClass} mb-2`}>
                    {title}
                  </h3>
                  <h4
                    className={`font-bold ${subtitleClass} mb-4 text-center`}
                  >
                    {subtitle}
                  </h4>
                  {subtitleNote && (
                    <p className="text-indigo-300 italic mb-4 text-sm text-center">
                      {subtitleNote}
                    </p>
                  )}

                  {/* Center button both horizontally & vertically */}
                  <div className="flex justify-center items-center mb-6">
                    <button
                      className={`${buttonClass} px-6 py-2 rounded-md transition font-semibold min-w-[140px] text-center`}
                    >
                      {buttonText}
                    </button>
                  </div>

                  <h5 className={`font-semibold ${textColorClass} mb-3`}>
                    {benefitsTitle}
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    {benefits.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>

        {/* Eligibility Note */}
        <p
          data-aos="fade-up"
          className="text-indigo-400 italic mb-12 text-center max-w-xl mx-auto text-sm"
        >
          *You're eligible to access Pro's Essential plan with zero upfront costs
          for 1 year. Maintain your eligibility after the first year by ordering
          services worth $1,000 annually.
        </p>

        {/* Compare Features Button */}
        <div className="flex justify-center mb-12" data-aos="zoom-in">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold transition">
            Compare all features
          </button>
        </div>

        {/* Banner */}
        <div
          data-aos="fade-up"
          className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 rounded-xl p-12 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Left */}
          <div className="flex-1">
            <h3 className="text-5xl font-extrabold text-white">Enterprise</h3>
          </div>

          {/* Right */}
          <div className="flex-1 space-y-4">
            <p className="text-indigo-300 max-w-lg">
              A custom solution for companies looking to streamline their freelance
              workforce seamlessly across the entire organization.
            </p>
            <p className="text-indigo-300">Contact us for custom pricing</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md font-semibold transition">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <ProFaq></ProFaq>
    </section>
  );
};

export default ProPlans;
