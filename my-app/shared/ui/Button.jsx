import React from "react";

const Button = ({ children, onClick, className = "", active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-2xl whitespace-nowrap text-center transition-colors duration-300
       ${className} ${active ? "text-black" : "text-white"}`}
    >
      {children}
    </button>
  );
};

export default Button;
