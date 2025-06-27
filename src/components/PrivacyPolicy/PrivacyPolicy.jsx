import React from "react";

const sections = [
  "The short version",
  "Information We Collect",
  "Our Legal Basis for Using Your Personal Information",
  "How Do We Use The Information Collected?",
  "How Long Do We Keep Personal Information?",
  "Children",
  "Sharing Personal Information with Third Parties",
  "Where We Process Your Personal Information",
  "Cookies",
  "Do Not Track",
  "External Links",
  "Security",
  "Specific Provisions for EU, EEA and UK Users",
  "Specific Provisions for US Residents",
  "Deleting or Updating Personal Information",
  "Contact Us",
];

const sectionId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const sectionDescriptions = {
  "The short version":
    "We value your privacy and are committed to protecting your personal data. This policy outlines what we collect, why we collect it, and how we handle your information.",
  "Information We Collect":
    "We collect information like name, email, IP address, usage data, device information, and any other data you voluntarily provide.",
  "Our Legal Basis for Using Your Personal Information":
    "We use your data based on your consent, to fulfill contracts, comply with legal obligations, or to serve our legitimate business interests.",
  "How Do We Use The Information Collected?":
    "We use your data to provide and improve our services, respond to your requests, personalize your experience, and for security and compliance.",
  "How Long Do We Keep Personal Information?":
    "Your data is stored only as long as necessary to fulfill the purposes we collected it for, including legal, accounting, or reporting requirements.",
  Children:
    "Our platform is not intended for children under 13. We do not knowingly collect personal data from children.",
  "Sharing Personal Information with Third Parties":
    "We do not sell your data. We may share it with trusted service providers to support our operations and comply with legal obligations.",
  "Where We Process Your Personal Information":
    "Your data may be processed in countries where we or our partners operate. We ensure adequate safeguards are in place.",
  Cookies:
    "We use cookies to enhance user experience, analyze site usage, and provide targeted content. You can manage preferences through your browser.",
  "Do Not Track":
    "Our website does not currently respond to 'Do Not Track' signals due to lack of a consistent industry standard.",
  "External Links":
    "Our platform may contain links to third-party sites. We are not responsible for their privacy practices. Please review their policies.",
  Security:
    "We implement industry-standard security measures to protect your data from unauthorized access, use, or disclosure.",
  "Specific Provisions for EU, EEA and UK Users":
    "You have rights under the GDPR including access, correction, deletion, and objection to processing of your personal data.",
  "Specific Provisions for US Residents":
    "Depending on your state, you may have rights under CCPA or similar laws, such as the right to access or delete your personal data.",
  "Deleting or Updating Personal Information":
    "You can request to update or delete your personal data at any time by contacting our support team.",
  "Contact Us":
    "If you have questions or concerns about this policy or our practices, contact us at privacy@miverr.com.",
};

const PrivacyPolicy = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.classList.add("bg-yellow-50", "transition", "duration-500");
      setTimeout(() => element.classList.remove("bg-yellow-50"), 2000);
    }
  };

  return (
    <div className=" bg-white mx-auto px-4 py-8 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Privacy Policy
        </h1>

        {/* Tab Menu */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 text-sm">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleScrollTo(sectionId(sec))}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-md transition"
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((title, idx) => (
            <section
              key={title}
              id={sectionId(title)}
              className="rounded-md p-4"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                {idx + 1}. {title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sectionDescriptions[title]}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
