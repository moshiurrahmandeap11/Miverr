import React from "react";
import success from "../../assets/success.mp4";

const Success = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-10/12 mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          What success on Miverr looks like
        </h2>
        <p className="mb-8 text-gray-700 max-w-3xl">
          Turns to Miverr freelancers to bring their vision to life.
        </p>
        <video
          className="w-full max-h-[600px] rounded-lg shadow-lg object-cover"
          src={success}
          controls
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
};

export default Success;
