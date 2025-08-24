import React from "react";

const IntroStartSection = () => {
  return (
    <div className="flex flex-col mt-10 justify-center items-center gap-10">
         <img
          src="/images/poster2.png"
          alt="IntroImage"
          className="w-[50%] laptop:w-[30%] desktop:w-[20%]" />
      <img
        src="/images/IntroImage.svg"
        alt="introImage"
        className="w-[80%] laptop:w-[40%]"
      />
      
      <div className="w-[80%] laptop:w-[50%] text-xs tablet:text-lg text-textBrown text-center">
       <p>We are CoKoMong,the 2025 World Friends Korea IT Team. From August 4 to 15, we will be offering
        web programming, graghic design, and Korean cultural classes for students at Hangai University
        in Mongolia. Our team, name “CoKoMong” stands for Korea and Mongolia connected through Coding.
        </p>
         <br/>
     <p> For any inquiries or suggestions, please contact the team leader via email or Instagram direct message.</p>
        
      </div>
    </div>
  );
};

export default IntroStartSection;
