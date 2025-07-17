import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    title: "Rewards program tiers",
    items: [
      {
        question: "What’s my account’s current tier?",
        answer: "Your current tier is visible in your dashboard under the Rewards section.",
      },
      {
        question: "How often can my account’s tier change?",
        answer: "Tiers are evaluated monthly based on your total spend.",
      },
      {
        question:
          "If I have already used Fiverr and I upgraded my account to Fiverr Pro, am I eligible for the rewards tiers based on my previous Fiverr order value?",
        answer: "Yes, your previous Fiverr spend counts towards your current tier.",
      },
    ],
  },
  {
    title: "Earning points",
    items: [
      {
        question:
          "When my account gets points on orders, will tips, taxes, and service fees be calculated in the amount?",
        answer: "Only the subtotal (excluding tips, taxes, and service fees) earns points.",
      },
      {
        question: "When will I receive my points?",
        answer: "Points are credited within 24 hours after an order is marked complete.",
      },
      {
        question: "How do points get calculated in accounts with multiple members?",
        answer: "All order values across team members are combined to determine rewards.",
      },
      {
        question: "What happens if I cancel an order?",
        answer: "Points from cancelled orders will be deducted from your total.",
      },
      {
        question: "Do points have an expiration date?",
        answer: "Yes, points expire 12 months after they are earned.",
      },
      {
        question:
          "What happens to my points if I change my account plan or switch to Fiverr?",
        answer: "Your points will remain active but may affect eligibility for certain rewards.",
      },
    ],
  },
  {
    title: "Redeeming rewards",
    items: [
      {
        question: "Who can redeem rewards in my account?",
        answer: "Only Admins and Owners of the account can redeem rewards.",
      },
      {
        question: "Do I have to use all my points when redeeming rewards?",
        answer: "No, you can choose how many points to redeem based on the reward.",
      },
      {
        question: "Can I send a gift card to my team members?",
        answer: "Yes, you can assign gift cards to any team member.",
      },
      {
        question: "Does my gift card have an expiration date?",
        answer: "Yes, each gift card has its own expiration date listed in your dashboard.",
      },
      {
        question: "Do Fiverr Credits have an expiration date?",
        answer: "Yes, Fiverr Credits expire after 12 months.",
      },
      {
        question: "Can I change my mind and cancel a redeemed reward?",
        answer: "No, once redeemed, rewards cannot be canceled or refunded.",
      },
      {
        question: "For additional information visit our Help Center",
        answer: "You can find more details and support at help.miverr.com.",
      },
    ],
  },
];

const ProBusinessFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-white py-20 px-6"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>

        <div className="space-y-8">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, i) => {
                  const index = `${sectionIndex}-${i}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={index}
                      className="bg-[#161616] rounded-lg overflow-hidden border border-[#2a2a2a]"
                      data-aos="fade-up"
                    >
                      <button
                        onClick={() => toggleIndex(index)}
                        className="w-full flex justify-between items-center px-5 py-4 text-left text-sm sm:text-base font-medium hover:bg-[#222222] transition"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-4 pt-1 text-gray-300 text-sm sm:text-base">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProBusinessFaq;
