"use client";

import React from "react";
import GridFrame from "../shared/ui/GridFrame";

const members = [
  { name: "Alice", image: "/images/mina.svg" },
  { name: "Bob", image: "/images/hee.svg" },
  { name: "Charlie", image: "/images/jae.svg" },
  { name: "Dana", image: "/images/seon.svg" },
];

const IntroMember = () => {
  return (
    <div className="p-4 bg-white">
      <GridFrame columns={{ mobile: 1, laptop: 2, desktop: 2 }}>
        {members.map((member, index) => (
          <div
            key={index}
            className="p-6 w-[80%] flex flex-col items-center justify-center p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className=" mb-2"
            />
          </div>
        ))}
      </GridFrame>
    </div>
  );
};

export default IntroMember;
