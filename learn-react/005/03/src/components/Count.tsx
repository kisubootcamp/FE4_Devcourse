import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Count() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((count) => count + 1);
  };
  const subCount = () => {
    if (count > 0) setCount((count) => count - 1);
  };
  const resetCount = () => {
    setCount(count - count);
  };
  return (
    <>
      <h1 className="mx-10 text-2xl font-bold">Count: {count}</h1>
      <button
        className={twMerge("btn_creater", "bg-[#5080b6]")}
        onClick={addCount}
      >
        증가
      </button>
      <button
        className={twMerge("btn_creater", "bg-[#cc5050]")}
        onClick={subCount}
      >
        감소
      </button>
      <button
        className={twMerge("btn_creater", "bg-[#36d456]")}
        onClick={resetCount}
      >
        리셋
      </button>
    </>
  );
}
