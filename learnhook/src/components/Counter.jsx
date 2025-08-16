import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(5);
  const addValue = () => {
    // console.log("Value added:", Math.random());
    // setCount(count + 1);
    if (count === 20) {
      setCount(20);
      alert("can't be more than 20");
    } else {
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if (count === 0) {
      setCount(0);
      alert("can't go in negative value");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="h-dvh flex flex-col justify-center items-center bg-zinc-800 text-white gap-5">
      <h1 className="text-4xl">Counter</h1>
      <h2 className="font-medium text-xl">Counter Value: {count}</h2>
      <button
        onClick={addValue}
        className="p-5 mt-5 bg-stone-500/50 rounded-2xl cursor-pointer"
      >
        <span className="font-medium text-lg">Add Value : {count}</span>
      </button>
      <button
        onClick={removeValue}
        className="p-5 bg-stone-500/50 rounded-2xl cursor-pointer"
      >
        <span className="font-medium text-lg">Remove Value : {count}</span>
      </button>
    </div>
  );
};

export default Counter;
