"use client";
import { useState } from "react";

export function useToggleMotion(length) {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggle = (index) => setActiveIndex(index);
  return { activeIndex, toggle };
}
