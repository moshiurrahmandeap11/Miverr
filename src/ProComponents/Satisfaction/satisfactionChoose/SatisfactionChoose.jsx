import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaDollarSign,
  FaHeadset,
  FaUsers,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    icon: <FaCheckCircle className="text-indigo-400 w-8 h-8" />,
    title: "Vetted, trusted freelancers",
    desc: "Hire only quality freelance talent from a variety of industries.",
  },
  {
    id: 2,
    icon: <FaDollarSign className="text-indigo-400 w-8 h-8" />,
    title: "Satisfaction guaranteed",
    desc: "If the delivery did not meet your expectations, you’ll receive a full refund within 14 days.",
  },
  {
    id: 3,
    icon: <FaHeadset className="text-indigo-400 w-8 h-8" />,
    title: "Expert guidance",
    desc: "Our team of experts will help you set up and execute projects, find the right freelance talent, and maximize your budget.",
  },
  {
    id: 4,
    icon: <FaUsers className="text-indigo-400 w-8 h-8" />,
    title: "Seamless team collaboration",
    desc: "Tools to manage and collaborate with freelance talent as an integrated part of your team.",
  },
];

const SatisfactionChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="max-w-full mx-auto px-6 py-14 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 shadow-xl text-white">
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        data-aos="fade-down"
      >
        Why businesses choose Fiverr Pro
      </h2>

      <div className="grid lg:mx-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map(({ id, icon, title, desc }) => (
          <motion.div
            key={id}
            data-aos="fade-up"
            data-aos-delay={id * 150}
            className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-xl p-6 flex flex-col items-start gap-4"
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            whileHover={{
              rotateX: 15,
              rotateY: 45,
              scale: 1.05,
              transition: {
                delay: 0,
                duration: 0,
                ease: "linear",
              },
            }}
          >
            <div className="bg-indigo-900 bg-opacity-30 rounded-full p-3 mb-2">
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold rounded-full px-8 py-3 shadow-lg drop-shadow-lg text-lg">
          Join Miverr Pro
        </button>
      </div>
    </section>
  );
};

export default SatisfactionChoose;
