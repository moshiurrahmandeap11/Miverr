import React from "react";
import { BookOpenText, FileText, HelpCircle, PhoneCall } from "lucide-react";

const resources = [
  {
    icon: <BookOpenText className="w-5 h-5 text-indigo-400" />,
    label: "Case Studies",
  },
  {
    icon: <FileText className="w-5 h-5 text-indigo-400" />,
    label: "Blog",
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-indigo-400" />,
    label: "Help & Support",
  },
  {
    icon: <PhoneCall className="w-5 h-5 text-indigo-400" />,
    label: "Contact Sales",
  },
];

const ProResources = () => {
  return (
    <div className="w-[240px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl rounded-lg p-4 space-y-2">
      {resources.map((item, i) => (
        <button
          key={i}
          className="w-full flex items-center gap-3 text-sm text-gray-200 hover:text-indigo-400 hover:bg-white/10 transition rounded-md px-3 py-2"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ProResources;
