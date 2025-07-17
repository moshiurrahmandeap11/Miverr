import React from "react";

const profiles = [
  {
    id: 1,
    name: "Sophia Lee",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Liam Johnson",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Carter",
    rating: 4.6,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const SatisfactionMake = () => {
  return (
    <section className="max-w-full mx-auto px-6 py-16 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col lg:flex-row gap-12">
      {/* Left side profiles box */}
      <div className="relative lg:mx-60 lg:w-1/3 h-[340px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-8 flex items-center justify-center">
        {profiles.map(({ id, name, rating, img }, i) => {
          // Position + style for stacking and opacity
          const styles = i === 0
            ? {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1) rotate(0deg)",
                opacity: 1,
                zIndex: 10,
                boxShadow: "0 20px 30px rgba(99, 102, 241, 0.6)",
                border: "4px solid #6366f1",
              }
            : i === 1
            ? {
                position: "absolute",
                top: "35%",
                left: "15%",
                transform: "translate(0, -50%) scale(0.85) rotate(-8deg)",
                opacity: 0.5,
                zIndex: 5,
                filter: "brightness(70%)",
                border: "3px solid rgba(99, 102, 241, 0.4)",
              }
            : {
                position: "absolute",
                top: "65%",
                left: "80%",
                transform: "translate(-100%, -50%) scale(0.85) rotate(8deg)",
                opacity: 0.5,
                zIndex: 4,
                filter: "brightness(70%)",
                border: "3px solid rgba(99, 102, 241, 0.4)",
              };

          return (
            <div
              key={id}
              className="flex flex-col items-center bg-gray-900 rounded-xl p-5 w-52 transition-transform duration-300"
              style={styles}
            >
              <img
                src={img}
                alt={name}
                className="w-28 h-28 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg text-white">{name}</h3>
              <p className="text-indigo-400 font-medium">{`⭐ ${rating}`}</p>
            </div>
          );
        })}
      </div>

      {/* Right side text */}
      <div className="lg:w-2/3 flex flex-col justify-center">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          What makes a Miverr Pro freelancer?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg max-w-xl">
          <li>Skill and expertise</li>
          <li>Quality deliverables</li>
          <li>Work and education</li>
          <li>Client satisfaction</li>
          <li>Notable clients</li>
          <li>Language proficiency</li>
          <li>High motivation</li>
          <li>Performance metrics</li>
        </ul>
      </div>
    </section>
  );
};

export default SatisfactionMake;
