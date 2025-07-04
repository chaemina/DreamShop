import React from "react";

const HomeLogoSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        src="/images/mainLogo.svg"
        alt="mainLogo"
        className="w-[80%] laptop:w-full "
      />
      <div className="text-xs laptop:text-lg text-textBrown text-center">
        WFK ICT X CoKoMong X Hangai University
      </div>
    </div>
  );
};

export default HomeLogoSection;
