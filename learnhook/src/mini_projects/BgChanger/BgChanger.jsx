// import React from "react";
// import ColorChangeBar from "../components/ColorChangeBar";

// const BgChanger = ({ bgColor = "bg-gray-800" }) => {
//   console.log("bgColor prop:", bgColor);
//   return (
//     //This way, Tailwind will see and generate all possible bg- classes during build.
//     <div
//       className={`${
//         bgColor || "bg-gray-800"
//       } h-dvh text-white flex justify-center items-end ring-4 ring-amber-500`}
//     >
//       <ColorChangeBar />
//     </div>
//   );
// };

// export default BgChanger;

import React from "react";

const BgChanger = ({ bgColor = "bg-gray-800", children }) => {
  console.log("bgColor prop:", bgColor);

  return (
    <div
      className={`${
        bgColor || "bg-gray-800"
      } h-dvh text-white flex flex-col align-top items-center`}
    >
      {children}
    </div>
  );
};

export default BgChanger;
