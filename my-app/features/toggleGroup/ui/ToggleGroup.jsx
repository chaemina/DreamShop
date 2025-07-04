"use client";

import React from "react";
import { useToggle } from "../model/useToggle";
import { useRouter } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import Button from "../../../shared/ui/Button";

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
    router.push(items[index].path);
  };

  return (
    <div className="relative flex bg-newGrey rounded-2xl p-1 gap-1">
      <LayoutGroup>
        {items.map((item, index) => (
          <div key={index} className="relative rounded-2xl">
            {index === activeIndex && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-white rounded-2xl z-0"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div className="relative z-10">
              <Button
                onClick={() => handleClick(index)}
                active={index === activeIndex}
                className="text-xs laptop:text-sm laptop:min-w-[8rem]"
              >
                {item.label}
              </Button>
            </div>
          </div>
        ))}
      </LayoutGroup>
    </div>
  );
};

export default ToggleGroup;
