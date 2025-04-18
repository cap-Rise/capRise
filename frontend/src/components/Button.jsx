import React from "react";

export const Button = ({ className, onClick, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` flex justify-center items-center text-base shadow-lg drop-shadow-xl bg-darkBlue
         rounded-[0.7rem] duration-500 font-semibold hover:shadow-lg ${className}  `}
      >
        {children}
      </button>
    </>
    
  );
};