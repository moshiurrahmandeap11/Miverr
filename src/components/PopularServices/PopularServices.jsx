import React from "react";
import services from "../../../public/data/popularservices.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // no pagination
import "swiper/css";
import "swiper/css/navigation";

const PopularServices = () => {
  return (
    <div className="bg-white mx-auto px-4 py-10">
      <div className="lg:max-w-10/12 mx-auto relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Popular Services
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={6}
          slidesPerGroup={6}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 12 },
            480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 16 },
            640: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 18 },
            768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 22 },
            1280: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 24 },
          }}
          className="pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-800 h-66 text-xl rounded-xl shadow-sm hover:shadow-md transition group border cursor-pointer flex flex-col">
                {/* Title */}
                <div className="px-5 py-3 flex-grow">
                  <h3 className="font-semibold text-white transition break-words">
                    {service.name}
                  </h3>
                </div>

                {/* Image container */}
                <div className="overflow-hidden bg-green-400 m-2 rounded-2xl p-4">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "75%" }}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows – hidden on small devices */}
        <button
          className="custom-prev hidden md:flex absolute top-1/2 -left-6 -translate-y-1/2 z-30 p-3 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-700 shadow-md transition"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          className="custom-next hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 z-30 p-3 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-700 shadow-md transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
