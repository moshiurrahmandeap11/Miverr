import React from "react";

const Section = ({ title, children, id }) => (
  <section className="mb-8" id={id}>
    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">{title}</h2>
    <div className="text-gray-700 space-y-3 text-sm md:text-base leading-relaxed">
      {children}
    </div>
  </section>
);

const TermsAndConditions = () => {
  return (
    <main className=" bg-white mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-10">
          Miverr Terms of Service
        </h1>

        <Section title="1. Representations and Warranties" id="1">
          <p>Users agree to provide accurate and truthful information...</p>
        </Section>

        <Section title="2. Key Terms" id="2">
          <p>Definitions of key terms used in this document...</p>
        </Section>

        <Section title="3. Overview (Main Terms, In a Nutshell)" id="3">
          <p>
            This is a summarized version of the core terms for easy
            understanding...
          </p>
        </Section>

        <Section title="4. Sellers" id="4">
          <Section title="4.1 Basics" id="4.1">
            <p>General requirements and expectations for sellers...</p>
          </Section>
          <Section title="4.2 Gigs" id="4.2">
            <p>Sellers create service listings known as Gigs...</p>
          </Section>
          <Section title="4.3 Gig Extras" id="4.3">
            <p>
              Additional services offered by sellers on top of standard Gig...
            </p>
          </Section>
          <Section title="4.4 Levels" id="4.4">
            <p>Sellers are categorized by performance-based levels...</p>
          </Section>
          <Section title="4.5 Pro Freelancers" id="4.5">
            <p>
              High-quality freelancers selected based on performance and
              expertise...
            </p>
          </Section>
          <Section title="4.6 Seller Features" id="4.6">
            <ul className="list-disc pl-5 space-y-1">
              <li>Custom Offer</li>
              <li>Miverr Go</li>
              <li>Hourly Contract</li>
              <li>Project Milestones</li>
              <li>Gig Subscription</li>
              <li>Stock Media</li>
            </ul>
          </Section>
          <Section title="4.7 Shipping Physical Deliverables" id="4.7">
            <p>Handling and delivery of physical products...</p>
          </Section>
        </Section>

        <Section title="5. Buyers" id="5">
          <Section title="5.1 Basics" id="5.1">
            <p>Guidelines and terms for users purchasing services...</p>
          </Section>
          <Section title="5.2 Purchasing" id="5.2">
            <p>How to purchase and what to expect from orders...</p>
          </Section>
          <Section title="5.3 Recommendation System" id="5.3">
            <p>Explanation of how suggestions are personalized...</p>
          </Section>
        </Section>

        <Section title="6. Orders" id="6">
          <Section title="6.1 Basics" id="6.1">
            <p>What defines a valid order and how it's tracked...</p>
          </Section>
          <Section title="6.2 Handling Orders" id="6.2">
            <p>Expectations for managing active orders...</p>
          </Section>
          <Section title="6.3 Reviews" id="6.3">
            <p>How review and rating systems function...</p>
          </Section>
        </Section>

        <Section title="7. Miverr Go" id="7">
          <Section
            title="7.1 Ordering on Fiverr Go AI Creation Models"
            id="7.1"
          >
            <p>Terms related to AI-based order fulfillment...</p>
          </Section>
          <Section title="7.2 Content" id="7.2">
            <p>Handling of AI-generated content...</p>
          </Section>
        </Section>

        <Section title="8. Miverr Logo Maker" id="8">
          <Section title="8.1 Editing Tool Commercial Use License" id="8.1">
            <p>Licensing details for using our logo maker...</p>
          </Section>
          <Section title="8.2 Logo Design Commercial Use License" id="8.2">
            <p>License for commercial use of designed logos...</p>
          </Section>
        </Section>

        <Section title="9. User Conduct and Protection" id="9">
          {[...Array(10)].map((_, i) => (
            <p key={i}>Details for section 9.{i + 1}...</p>
          ))}
        </Section>

        <Section title="10. User Generated Content" id="10">
          <p>Ownership, rights, and moderation of content...</p>
        </Section>

        <Section title="11. Ownership" id="11">
          <ul className="list-disc pl-5 space-y-1">
            <li>Voice Over Commercial Buy-Out</li>
            <li>Commercial Use License</li>
            <li>Stock Media</li>
          </ul>
        </Section>

        <Section title="12. Disclaimer of Warranties" id="12">
          <p>General limitations of liability and expectations...</p>
        </Section>

        <Section title="13. Machine Translation" id="13">
          <p>Content translated by AI tools may not be perfect...</p>
        </Section>

        <Section title="14. Limitation on Liability" id="14">
          <p>Miverr’s liability in different scenarios is limited...</p>
        </Section>

        <Section title="15. Deactivate and Disable Account" id="15">
          <p>How and when accounts may be disabled...</p>
        </Section>

        <Section title="16. Security Features" id="16">
          <p>Security technologies and user responsibilities...</p>
        </Section>

        <Section title="17. Disputes with Miverr" id="17">
          <p>How to resolve disputes with the platform...</p>
        </Section>

        <Section title="18. General Terms" id="18">
          {[...Array(7)].map((_, i) => (
            <p key={i}>Details for section 18.{i + 1}...</p>
          ))}
        </Section>
      </div>
    </main>
  );
};

export default TermsAndConditions;
