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
      <div className="lg:w-10/12 px-4 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="lg:text-3xl font-bold text-gray-900">
            Guides to help you grow
          </h2>
          <Link to="/" className="text-black font-medium lg:font-bold hover:underline">
            See More
          </Link>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={{
              prevEl: ".grow-prev",
              nextEl: ".grow-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="pb-6"
          >
            {posts.map(({ id, image, text }) => (
              <SwiperSlide key={id}>
                <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white">
                  <img
                    src={image}
                    alt={text}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <p className="mt-3 px-4 pb-4 text-gray-800 font-semibold">
                    {text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows (only on desktop) */}
          <button
            className="grow-prev hidden lg:flex absolute top-1/2 -left-6 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className="grow-next hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Grow;
