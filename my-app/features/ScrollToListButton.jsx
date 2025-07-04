import React from "react";
import Button from "../shared/ui/Button";

const ScrollToListButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="text-xs laptop:text-sm bg-textBrown shadow hover:bg-stone-400"
    >
     Go to the Ger Shop
    </Button>
  );
};

export default ScrollToListButton;
