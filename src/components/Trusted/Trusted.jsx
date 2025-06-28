import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  { icon: "3d-cube", name: "3D Industrial Design" },
  { icon: "ecommerce-cart", name: "E-commerce Website Development" },
  { icon: "email-send", name: "Email Marketing" },
  { icon: "newspaper", name: "Press Releases" },
  { icon: "logo-design", name: "Logo Design" },
];

// Icon component as before
const Icon = ({ name }) => {
  switch (name) {
    case "3d-cube":
      return (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "ecommerce-cart":
      return (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      );
    case "email-send":
      return (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M22 12l-20 9 9-20 2 9 9 2z" />
        </svg>
      );
    case "newspaper":
      return (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <line x1="8" y1="2" x2="8" y2="22" />
          <line x1="16" y1="2" x2="16" y2="22" />
        </svg>
      );
    case "logo-design":
      return (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14 8l-4 8M10 8l4 8" />
        </svg>
      );
    default:
      return <div className="w-8 h-8 bg-orange-500 rounded-full" />;
  }
};

const Trusted = () => {
  const boxClasses =
    "flex flex-col items-center justify-center w-48 h-48 p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer";

  return (
    <section className="w-full py-12 bg-white">
      <div className="lg:max-w-10/12 mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 text-gray-900 text-left">
          Trusted Services
        </h3>

        {/* Grid for desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          {services.map(({ icon, name }) => (
            <div key={name} className={boxClasses}>
              <Icon name={icon} />
              <p className="mt-4 text-center font-semibold text-gray-800">{name}</p>
            </div>
          ))}
        </div>

        {/* Slider for mobile/tablet */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.5}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            // no navigation arrows
          >
            {services.map(({ icon, name }) => (
              <SwiperSlide key={name}>
                <div className={boxClasses}>
                  <Icon name={icon} />
                  <p className="mt-4 text-center font-semibold text-gray-800">{name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
