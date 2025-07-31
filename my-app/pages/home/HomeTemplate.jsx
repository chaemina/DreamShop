"use client";

import React, { useRef } from "react";
import HomeLogoSection from "../../entities/LogoSection/HomeLogoSection";
import ScrollToListButton from "../../features/ScrollToListButton";
import FadeInSection from "../../widgets/FadeInSection/FadeInSection";
import { gers } from "../../shared/constants/ger";
import GerLink from "../../shared/ui/GerLink";


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
            <div className="grid grid-cols-2 laptop:grid-cols-4 gap-6 "> 
               {gers.map((ger, index) =>
                 <GerLink key={ger.id} {...ger} />)}
            </div>
        </FadeInSection>
         </div>
    </div>
  );
};

export default HomePage;
