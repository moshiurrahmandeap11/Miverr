import React, { useEffect } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    id: 1,
    image: "https://i.postimg.cc/28vzH2X6/infographic-w-1019.jpg",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
    authorName: "Sophia Lee",
    tag: "Video Editor",
    review:
      "Amazing work, fast and professional! Highly recommend for any video project.",
    rating: 5,
    startingRate: 45,
    consultation: "Video Editor Consultations",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/fTxN7kJS/free-video-editing-software.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    authorName: "Liam Johnson",
    tag: "Motion Designer",
    review:
      "Super creative and detail-oriented freelancer. Delivered beyond expectations.",
    rating: 4,
    startingRate: 60,
    consultation: "Motion Design Consultations",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/Dzz3Kg51/the-best-online-video-editors-for-2025-tubp-1200.webp",
    authorImg: "https://randomuser.me/api/portraits/women/68.jpg",
    authorName: "Emily Carter",
    tag: "Animator",
    review: "Great communication and outstanding animation skills!",
    rating: 5,
    startingRate: 55,
    consultation: "Animation Consultations",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/Y2FKkjND/1c47674dccfe66c4f365602-video-editing-templats-webp.png",
    authorImg: "https://randomuser.me/api/portraits/men/85.jpg",
    authorName: "James Smith",
    tag: "Video Producer",
    review:
      "Very professional and reliable. Perfect for video production needs.",
    rating: 4,
    startingRate: 70,
    consultation: "Video Production Consultations",
  },
];

const ProSatisfactionReview = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <section className="max-w-full mx-auto px-6 py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl">
      <h2
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-12 text-center drop-shadow-md"
        data-aos="fade-down"
      >
        Meet our skilled freelancers
      </h2>

      <div className="grid lg:mx-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {reviews.map(
          ({
            id,
            image,
            authorImg,
            authorName,
            tag,
            review,
            rating,
            startingRate,
            consultation,
          }) => (
            <div
              key={id}
              className="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col cursor-pointer
                         transform transition-transform duration-500 ease-in-out
                         hover:scale-[1.03] hover:shadow-[0_15px_25px_rgba(99,102,241,0.6)]"
              data-aos="fade-up"
              data-aos-delay={id * 100}
            >
              {/* Image with hover arrow */}
              <div className="relative group overflow-hidden">
                <img
                  src={image}
                  alt={`${authorName}'s work`}
                  className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  aria-label="View details"
                  className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity text-white text-3xl"
                >
                  <FaArrowRight />
                </button>
              </div>

              {/* Author info + tag */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-600">
                <div className="flex items-center gap-3">
                  <img
                    src={authorImg}
                    alt={authorName}
                    className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <span className="font-semibold text-gray-200">
                    {authorName}
                  </span>
                </div>
                <span className="text-xs bg-indigo-600 bg-opacity-70 text-white px-3 py-1 rounded-full font-semibold tracking-wide">
                  {tag}
                </span>
              </div>

              {/* Review text */}
              <p className="px-5 py-4 flex-grow text-gray-300 text-sm leading-relaxed">
                {review}
              </p>

              {/* Rating + rate + consultation */}
              <div className="px-5 py-4 border-t border-gray-600 flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < rating ? "text-yellow-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-gray-400 font-medium text-sm">
                  <span>Starting at ${startingRate}</span>
                  <span className="italic">{consultation}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* See all button */}
      <div className="flex justify-center mt-14">
        <button className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold rounded-full px-7 py-3 shadow-lg drop-shadow-lg text-lg">
          See All <FaArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default ProSatisfactionReview;
