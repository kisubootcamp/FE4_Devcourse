import { useState } from "react";

export default function ColorBox() {
  const [input, setInput] = useState("white");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: input }}
          ></div>
          <input
            value={input}
            type="text"
            onChange={handleChange}
            className="border border-slate-500 w-40 mt-2"
          />
        </div>
      </div>
    </>
  );
}
