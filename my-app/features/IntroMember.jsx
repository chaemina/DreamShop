"use client";

import React from "react";
import GridFrame from "../shared/ui/GridFrame";

const members = [
  {
    name: "Chae Min A",
    image: "/images/mina.svg",
    email: "chaemina82@naver.com",
    instagram: "___chaemina"
  },
  {
    name: "Kim Hee Jeong",
    image: "/images/hee.svg",
    email: "khjmangu135@naver.com",
    instagram: "llolxw"
  },
  {
    name: "Park Jae Yong",
    image: "/images/jae.svg",
    email: "wodyddl09166@naver.com",
    instagram: "zeddy.zip_"
  },
  {
    name: "Jeong Seon Hyeong",
    image: "/images/seon.svg",
    email: "linears317@gmail.com",
    instagram: "xeonyung"
  },
];


const IntroMember = () => {
  
  return (
    
    <div className="p-4 ">
      <GridFrame columns={{ mobile: 1, laptop: 2, desktop: 2 }}>
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center latop:p-6"
          >
            <object type="image/svg+xml" data={member.image} className="w-full mb-2 block h-auto">
            <img
              src={member.image}
              alt={member.name}
            />
            </object>
            
            <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2 text-sm text-gray-700">
                <img
                  src="/images/mail.svg"
                  alt="mail icon"
               />
               <span className="text-xs laptop:text-sm">{member.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <img src="/images/insta_icon.svg"  alt="insta icon"/>
              <a
                href={`https://www.instagram.com/${member.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs laptop:text-sm hover:underline"
              >
                {member.instagram}
              </a>
            </div>
            </div>

          </div>
        ))}
      </GridFrame>
    </div>
  );
};

export default IntroMember;
