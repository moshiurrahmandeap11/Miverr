import React from "react";
import { Link } from "react-router";
import data from "../../../../../public/data/categories.json";

const SubFooter = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {data.map(({ title, items }, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {title}
            </h3>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubFooter;
