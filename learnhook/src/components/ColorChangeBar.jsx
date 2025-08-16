import React from "react";

const ColorChangeBar = ({ onColorChange }) => {
  const bgClasses = {
    gray: "bg-gray-800",
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    fuchsia: "bg-fuchsia-500",
    cyan: "bg-cyan-500",
    amber: "bg-amber-500",
    zinc: "bg-zinc-500",
  };

  return (
    <div className="bg-white text-black w-[90%] my-10 max-w-2xl rounded-3xl py-3 px-5 shadow-lg flex justify-between gap-2">
      {Object.keys(bgClasses).map((colorKey) => (
        <button
          key={colorKey}
          className={`${bgClasses[colorKey]} px-9 py-4 rounded-3xl transform hover:-translate-y-2 transition duration-300`}
          onClick={() => onColorChange(bgClasses[colorKey])}
        />
      ))}
    </div>
  );
};

export default ColorChangeBar;
