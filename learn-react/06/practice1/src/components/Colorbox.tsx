import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ColorBox() {
  const [color, setColor] = useState("");
  const colorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: color }}
          ></div>
          <input
            onChange={colorHandler}
            type="text"
            className="border border-slate-500 w-40 mt-2"
          />
        </div>
      </div>
    </>
  );
}
