import React, { useState } from "react";

export default function ColorBox() {
  const [input, setInput] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            type="text"
            className="border border-slate-500 w-40 mt-2"
            value={input}
            onChange={changeHandler}
          />
        </div>
      </div>
    </>
  );
}
// 테일윈드는 내부적으로 캐싱이 되기 때문에 사용자가 렌더링했던 색상을 캐싱한다
