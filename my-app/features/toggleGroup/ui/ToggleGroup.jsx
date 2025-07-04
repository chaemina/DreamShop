"use client";

import React from "react";
import { useToggle } from "../model/useToggle";
import { useRouter } from "next/navigation";

const items = [
  { label: "Home", path: "/" },
  { label: "Our Album", path: "/" },
  { label: "CoKoMong", path: "/intro" },
   { label: "Contact us", path: "/" },
];

const ToggleGroup = () => {
  const { activeIndex, toggle } = useToggle(items.length);
  const router = useRouter();

  const handleClick = (index) => {
    toggle(index);
    const path = items[index].path; 
    router.push(path);
  };

  return (
    <div className="flex justify-around rounded-2xl bg-newGrey items-center justify-center  whitespace-nowrap">
      {items.map((item, index) => (
        <button
          key={index}
          className={`laptop:min-w-[8rem] m-1 p-1 rounded-2xl text-xs latop:text-sm rounded ${
            index === activeIndex
              ? "bg-white"
              : ""
          }`}
          onClick={() => handleClick(index)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleGroup;
