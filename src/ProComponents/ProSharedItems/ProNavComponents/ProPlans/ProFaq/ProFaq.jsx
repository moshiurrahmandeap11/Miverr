import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who can activate the Essential plan?",
    answer:
      "Anyone who meets the eligibility criteria, like ordering services worth $1,000 annually, can activate the Fiverr Pro Essential plan.",
  },
  {
    question:
      "Where can I see the end date of my access to Fiverr Pro Essential?",
    answer:
      "You can find the expiration date in your account settings under the Pro Subscription section.",
  },
  {
    question: "Will my account ever be charged for access?",
    answer:
      "Your account won’t be charged for the first year if you meet the eligibility criteria. Charges only apply if you continue after that without qualifying.",
  },
  {
    question:
      "If I order services worth $1,000 or more annually, will I get Fiverr Pro Essential for free?",
    answer:
      "Yes! You’ll maintain free access as long as you keep ordering services worth $1,000+ annually.",
  },
  {
    question: "Can I pay for Fiverr Pro Essential?",
    answer:
      "At this time, Fiverr Pro Essential is only available based on eligibility, not as a direct purchase.",
  },
  {
    question: "Who can upgrade to the Advanced plan?",
    answer:
      "Any eligible business or team that requires advanced tools and compliance support can upgrade to the Advanced plan.",
  },
  {
    question: "Can I purchase the Advanced plan with my Fiverr balance?",
    answer:
      "Yes, the Advanced plan can be purchased using your Fiverr balance, subject to availability in your region.",
  },
  {
    question:
      "If I subscribed to the Advanced plan and canceled, what would happen to my Fiverr Pro account?",
    answer:
      "Your account will revert to the previous plan or become a free user after the current billing cycle ends.",
  },
  {
    question:
      "When will my account be charged once it’s subscribed to the Advanced plan?",
    answer:
      "Billing starts immediately when you subscribe and will renew monthly unless canceled.",
  },
  {
    question:
      "If I cancel the Advanced plan subscription, will I get a refund?",
    answer:
      "Refunds are not issued for partial months. You’ll retain access until the end of the billing cycle.",
  },
  {
    question: "Can I switch to Fiverr and later return to Fiverr Pro?",
    answer:
      "Yes, you can return to Fiverr Pro anytime if you meet the eligibility or choose a paid plan.",
  },
];

const ProFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-indigo-400"
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => toggle(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, toggle, delay }) => {
  const contentRef = useRef();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-indigo-300 font-semibold focus:outline-none"
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden px-6 text-sm text-gray-300"
      >
        <div className="pb-4">{faq.answer}</div>
      </div>
    </div>
  );
};

export default ProFaq;
