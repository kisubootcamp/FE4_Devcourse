import React, { useState } from "react";

// 제어 컨트롤러 방식
// 폼(요소) 제어
export default function App() {
  const [input, setInput] = useState("");
  const HandlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput(e.target.value);
  };

  const [checked, setChecked] = useState(false);
  const handlerCheckbox = () => {
    setChecked((checked) => !checked);
  };

  return (
    <>
      <p>selected:{input}</p>
      <select value={input} onChange={HandlerSelect}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>

      <input type="checkbox" checked={checked} onChange={handlerCheckbox} />
      {checked && <h1>선택됨</h1>}
    </>
  );
}
