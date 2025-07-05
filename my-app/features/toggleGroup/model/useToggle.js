"use client"; 

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useToggle(items) { 
  const pathname = usePathname(); 

  const initialIndex = items.findIndex(item => item.path === pathname);
  const [activeIndex, setActiveIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

  useEffect(() => {
    const currentIndex = items.findIndex(item => item.path === pathname);
    if (currentIndex !== -1 && currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  }, [pathname, items, activeIndex]); 

  const toggle = (index) => {
    setActiveIndex(index);
  };

  return { activeIndex, toggle };
}