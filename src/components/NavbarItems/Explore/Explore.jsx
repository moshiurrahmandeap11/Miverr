import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Explore = () => {
  const texts = [
    { title: "Answers", highlight: "Powered by AI, answered by Miverr freelancers" },
    { title: "Community", highlight: "Connect with Miverr's team and community" },
    { title: "Guides", highlight: "In-depth guides covering business topics" },
    { title: "Podcast", highlight: "Inside tips from top business minds" },
    { title: "Learn", highlight: "Professional online courses, led by experts" },
    { title: "Blog", highlight: "News, information and community stories" },
    { title: "Logo Maker", highlight: "Create your logo instantly" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-[350px] sm:w-[400px] bg-white lg:shadow-2xl rounded-2xl px-6 py-6 space-y-6"
    >
      {/* Features */}
      <div className="space-y-5">
        {texts.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 hover:bg-gray-200 cursor-pointer p-3 rounded-md transition duration-300 ease-in-out"
          >
            <div>
              <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
              {!isMobile && (
                <p className="text-sm text-gray-600 leading-snug">{item.highlight}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Explore;
