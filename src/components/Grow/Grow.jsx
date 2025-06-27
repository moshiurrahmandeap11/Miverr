import React from "react";
import posts from "../../../public/data/grow.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";

const Grow = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Guides to help you grow
          </h2>
          <Link className="text-black font-bold mb-6">See More</Link>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {posts.map(({ id, image, text }) => (
            <SwiperSlide key={id}>
              <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                <img
                  src={image}
                  alt={text}
                  className="w-full h-68 object-cover"
                  loading="lazy"
                />
                <p className="mt-3 px-4 text-gray-800 font-semibold">{text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Grow;
