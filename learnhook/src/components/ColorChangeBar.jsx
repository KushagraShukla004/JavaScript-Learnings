// import React from "react";
// import BgChanger from "../mini_projects/BgChanger";

// const ColorChangeBar = () => {
//   /*
// className={`${
// bgColor === "gray" ? `bg-${bgColor}-800` : `bg-${bgColor}-500`
// } h-dvh`}

// This seems fine logically, but Tailwind CSS cannot parse dynamic class names like bg-${bgColor}-800 during build time, so it doesn't include them in the final CSS bundle. As a result, even though your logic sets bgColor = "gray", the corresponding class like bg-gray-800 doesn't get applied because Tailwind didn't generate that class.
// */

//   //Hard-code the possible combinations or use a map:
//   const bgClasses = {
//     gray: "bg-gray-800",
//     red: "bg-red-500",
//     blue: "bg-blue-500",
//     green: "bg-green-500",
//     fuchsia: "bg-fuchsia-500",
//     cyan: "bg-cyan-500",
//     amber: "bg-amber-500",
//     zinc: "bg-zinc-500",
//   };

//   return (
//     <div className="bg-white text-black w-[90%] mb-20 max-w-2xl rounded-3xl py-3 px-5 shadow-lg flex justify-between gap-2">
//       {Object.keys(bgClasses).map((colorKey) => {
//         return (
//           <button
//             key={colorKey}
//             className={`${bgClasses[colorKey]} px-9 py-4 rounded-3xl transform hover:-translate-y-2 transition duration-300`}
//             onClick={() => <BgChanger bgColor={bgClasses[colorKey]} />}
//           ></button>
//         );
//       })}
//     </div>
//   );
// };

// export default ColorChangeBar;

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
