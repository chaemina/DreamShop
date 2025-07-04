"use client";

import React, { useRef } from "react";
import HomeLogoSection from "../../entities/LogoSection/HomeLogoSection";
import ScrollToListButton from "../../features/ScrollToListButton";
import FadeInSection from "../../widgets/FadeInSection/FadeInSection";

const HomePage = () => {
  const listRef = useRef(null);

  const scrollToList = () => {
    listRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
        <div className="min-h-screen gap-20 w-full flex flex-col items-center justify-center">
          <HomeLogoSection />
          <ScrollToListButton onClick={scrollToList} />
         </div>
        <div ref={listRef}>
            <FadeInSection>
            <div className="text-lg font-semibold">✨ 게르 리스트 출력 ✨</div>
        </FadeInSection>
         </div>
    </div>
  );
};

export default HomePage;
