"use client";
import React, { useRef } from "react";
import FadeInSection from "../../widgets/FadeInSection/FadeInSection";
import IntroStartSection from "../../entities/LogoSection/IntroStartSection";
import IntroMember from "../../features/IntroMember";
import ContactPage from "./ContactTemplate";

const IntroPage = () => {
  const listRef = useRef(null);
  return (
    <div className="flex flex-col w-full justify-center items-center tablet:gap-10">
        <div className="w-full flex flex-col items-center justify-center">
          <IntroStartSection />
         
         </div>
         
          <div ref={listRef}>
            <FadeInSection>
               <div className="w-full h-full flex justify-center items-center">
                <IntroMember/>
               </div>
            <ContactPage/>
        </FadeInSection>
        </div>

    </div>
  );
};

export default IntroPage;
