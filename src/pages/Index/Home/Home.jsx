import React, { useState, useEffect, useRef } from "react";
import Hero from "../Hero/Hero";
import CategoryGrid from "../../../components/CategoryGrid/CategoryGrid";
import PopularServices from "../../../components/PopularServices/PopularServices";
import StickyCategoryNav from "../../../components/StickyCategoryNav/StickyCategoryNav";
import Banner from "../../../components/Banner/Banner";

import categories from "../../../../public/data/topNav.json";

const Home = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const categoryTop =
        categoryRef.current?.getBoundingClientRect().top + window.scrollY;

      const isPastCategory = currentScrollY > categoryTop + 100;

      if (isPastCategory && currentScrollY > lastScrollY) {
        // scrolling down and past category grid
        setShowStickyNav(true);
      } else {
        // scrolling up or not past category
        setShowStickyNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero />
      <div ref={categoryRef}>
        <CategoryGrid />
      </div>
      <PopularServices />
      <StickyCategoryNav categories={categories} isVisible={showStickyNav} />
      <Banner />
    </div>
  );
};

export default Home;
