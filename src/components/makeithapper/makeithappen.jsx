import React from "react";

const Icon = ({ name }) => {
  switch (name) {
    case "top-talent":
      return (
        <svg
          className="w-10 h-10 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l9 21H3L12 2z" />
        </svg>
      );
    case "easy-matching":
      return (
        <svg
          className="w-10 h-10 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 2 4-4" />
        </svg>
      );
    case "quick-quality":
      return (
        <svg
          className="w-10 h-10 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
    case "pay-when-happy":
      return (
        <svg
          className="w-10 h-10 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 21c4.418 0 8-3.582 8-8S16.418 5 12 5 4 8.582 4 13s3.582 8 8 8z" />
          <path d="M8 13l2 2 4-4" />
        </svg>
      );
    default:
      return <div className="w-10 h-10 bg-blue-500 rounded-full" />;
  }
};

const MakeItHappen = () => {
  const points = [
    {
      icon: "top-talent",
      name: "Access a pool of top talent across 700 categories",
    },
    {
      icon: "easy-matching",
      name: "Enjoy a simple, easy-to-use matching experience",
    },
    {
      icon: "quick-quality",
      name: "Get quality work done quickly and within budget",
    },
    {
      icon: "pay-when-happy",
      name: "Only pay when you’re happy",
    },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="w-10/12 mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Make It Happen
        </h3>

        {/* Boxes container */}
        <div className="flex flex-wrap justify-center gap-6">
          {points.map(({ icon, name }) => (
            <div
              key={name}
              className="w-72 flex items-center gap-5 p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <Icon name={icon} />
              <p className="text-gray-800 font-medium">{name}</p>
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MakeItHappen;
