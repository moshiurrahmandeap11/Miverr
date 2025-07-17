import React from "react";

const sponsors = [
  { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" },
  { name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Tesla", img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
];

const SatisfactionSponsor = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 px-4 flex flex-col items-center">
      <h2 className="text-sm md:text-base font-bold mb-6 text-center tracking-wide drop-shadow-sm bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Join 200K+ businesses working with Miverr Pro
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl w-full">
        {sponsors.map(({ name, img }, idx) => (
          <img
            key={idx}
            src={img}
            alt={name}
            title={name}
            className="h-4 md:h-6 px-3 object-contain filter brightness-90 hover:brightness-110 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default SatisfactionSponsor;
