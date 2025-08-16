import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "../../components";

const PasswordGen = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const passwordGen = useCallback(() => {
    let genPassword = "";
    let chars = "ABCDEFGHIJKLMNOPQRSUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) chars += "0123456789";
    if (isSymbol) chars += "!@#$%^&*()-_+={}[]`~";

    //Define the length of password and loop it to create a password
    for (let i = 1; i <= length; i++) {
      //Randomly select an index of a char in chars
      let char = Math.floor(Math.random() * chars.length + 1);
      genPassword += chars.charAt(char);
    }

    setPassword(genPassword);
  }, [length, setPassword, isNumber, isSymbol]);

  //if we call passwordGen() function like this then it will go into infinite loop
  // passwordGen();

  //we have to call the passwordGen() when we want to call it like when changing length range, selecting isNumber or not etc . Which basically means when UI re-renders hence , for that we use useEffect

  useEffect(() => {
    passwordGen();
  }, [length, isNumber, isSymbol, passwordGen]);

  const copyRef = useRef(null);

  const copyToClip = useCallback(() => {
    copyRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [copyRef, password]);

  return (
    <div className="w-full h-[50%] flex flex-col items-center justify-center p-6">
      <Card>
        <h1 className="text-5xl font-bold text-white text-center">
          🔐 Password Generator
        </h1>

        {/* Password Display + Copy */}
        <div className="w-full bg-white/30 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between shadow-inner">
          <input
            type="text"
            ref={copyRef}
            readOnly
            placeholder="Your secure password"
            className="flex-1 bg-transparent text-black text-lg font-semibold placeholder-gray-600 focus:outline-none px-4"
            value={password}
          />
          <button
            onClick={copyToClip}
            className="bg-blue-600 text-white font-medium px-5 py-2 rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Length Range */}
          <div className="w-[50%]">
            <label className="text-white text-lg font-medium mb-1 block">
              Password Length
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="slider"
            />
            <span>Range: {length}</span>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-4">
            <label className="inline-flex items-center text-white text-lg gap-2">
              <input
                type="checkbox"
                onChange={() => {
                  //if we just like this , then it will only setIsNumber(true) permanently and not go back to "false" because on click we are just setting it as "true" again and again
                  // setIsNumber(true);

                  //Hence, we need something that can be updated according to "previous" value
                  //So, we can useState callback function here , i have given name "prev" for clarity but its just a variable , So variable name can be anything!
                  setIsNumber((prev) => !prev);
                }}
                className="accent-pink-500 w-5 h-5"
              />
              Include Numbers
            </label>
            <label className="inline-flex items-center text-white text-lg gap-2">
              <input
                type="checkbox"
                onChange={() => {
                  setIsSymbol((prev) => !prev);
                }}
                className="accent-pink-500 w-5 h-5"
              />
              Include Symbols
            </label>
          </div>
        </div>

        {/* Generate Button (future use) */}
        {/* <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-transform">
            Generate Password
          </button> */}
      </Card>
    </div>
  );
};

export default PasswordGen;
