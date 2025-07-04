import React, { useState, useEffect, useRef } from "react";
import Hero from "../Hero/Hero";
import CategoryGrid from "../../../components/CategoryGrid/CategoryGrid";
import PopularServices from "../../../components/PopularServices/PopularServices";
import StickyCategoryNav from "../../../components/StickyCategoryNav/StickyCategoryNav";
import Banner from "../../../components/Banner/Banner";

import categories from "../../../../public/data/topNav.json";
import SecondBanner from "../../../components/SecondBanner/SecondBanner";
import Success from "../../../components/Success/Success";
import Trusted from "../../../components/Trusted/Trusted";
import MakeItHappen from "../../../components/makeithapper/makeithappen";
import MadeOnMiverr from "../../../components/MadeOnMiverr/MadeOnMiverr";
import Grow from "../../../components/Grow/Grow";
import JoinMiverr from "../../../components/JoinMiverr/JoinMiverr";

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
      <div className="hidden lg:block">
        <StickyCategoryNav categories={categories} isVisible={showStickyNav} />
      </div>
      <Banner />
      <SecondBanner></SecondBanner>
      <Success></Success>
      <Trusted></Trusted>
      <MakeItHappen></MakeItHappen>
      <MadeOnMiverr></MadeOnMiverr>
      <Grow></Grow>
      <JoinMiverr></JoinMiverr>
    </div>
  );
};

export default Home;
