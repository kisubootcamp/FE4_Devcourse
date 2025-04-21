import React, { useState } from "react";

export default function ColorBox() {
  const [input, setInput] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="item-middle justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: input }}
          ></div>
          <input
            type="text"
            onChange={changeHandler}
            value={input}
            className="border border-slate-500 w-40 mt-2"
          />
        </div>
      </div>
    </>
  );
}
