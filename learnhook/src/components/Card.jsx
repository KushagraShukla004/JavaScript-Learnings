import React from "react";
//A reusable component Card which can be used anywhere
const Card = ({ children }) => {
  return (
    <div className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-lg border border-white/30 w-full max-w-xl p-8 flex flex-col items-center gap-6 transition-all duration-300 hover:shadow-2xl">
      {children}
    </div>
  );
};

export default Card;
