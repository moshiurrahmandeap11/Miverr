import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Initialize AOS in useEffect
const categories = [
  { id: 1, title: "UI/UX", img: "https://i.postimg.cc/bvdvmSCg/ui.png" },
  { id: 2, title: "Website Development", img: "https://i.postimg.cc/rs9cVqZz/app-development-1.png" },
  { id: 3, title: "SEO", img: "https://i.postimg.cc/sgxyzdYD/seo-11923681.png" },
  { id: 4, title: "Video & Animation", img: "https://i.postimg.cc/rm12j8kg/animation.png" },
  { id: 5, title: "E-commerce", img: "https://i.postimg.cc/BbN9WMtK/shopping.png" },
  { id: 6, title: "AI & Chatbots", img: "https://i.postimg.cc/76ypfp2z/chatbot.png" },
  { id: 7, title: "Social Media", img: "https://i.postimg.cc/Rhg8phb1/social-media.png" },
  { id: 8, title: "Software Development", img: "https://i.postimg.cc/76VQbbDv/software.png" },
  { id: 9, title: "Business Consulting", img: "https://i.postimg.cc/fRc7MpDp/conversation.png" },
];

const SatisfactionMakeSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Work with vetted, trusted freelancers for any project
        </h2>

        <div className="relative">
          {/* Swiper Arrows (inside but styled smaller) */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {categories.map((item, idx) => (
              <SwiperSlide key={item.id}>
                <div
                  className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-4 rounded-xl shadow-md h-24"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Override Swiper arrows */}
          <style>
            {`
              .swiper-button-prev, .swiper-button-next {
                color: white;
                background-color: rgba(55, 65, 81, 0.7); /* Tailwind's gray-700 with opacity */
                padding: 0.4rem;
                border-radius: 9999px;
                width: 28px;
                height: 28px;
                top: 40%;
                transform: translateY(-50%);
              }

              .swiper-button-prev {
                left: -10px;
              }

              .swiper-button-next {
                right: -10px;
              }

              .swiper-button-prev::after,
              .swiper-button-next::after {
                font-size: 14px;
              }

              @media (max-width: 640px) {
                .swiper-button-prev,
                .swiper-button-next {
                  display: none;
                }
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionMakeSlider;
