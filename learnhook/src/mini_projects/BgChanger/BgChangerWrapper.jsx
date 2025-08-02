import React, { useState } from "react";
import BgChanger from "./BgChanger";
import ColorChangeBar from "../../components/ColorChangeBar";
import PasswordGen from "../PasswordGenerator/passwordGen";

const BgChangerWrapper = () => {
  const [bgColor, setBgColor] = useState("bg-gray-800");

  return (
    <BgChanger bgColor={bgColor}>
      <ColorChangeBar onColorChange={setBgColor} />
      <PasswordGen cardColor={bgColor} />
    </BgChanger>
  );
};

export default BgChangerWrapper;
