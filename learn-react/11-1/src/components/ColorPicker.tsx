import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="item-middle">
      <div className="flex flex-col">
        <div
          className="w-40 h-40 border border-slate-500"
          style={{ backgroundColor: color }}
        ></div>
        <input
          type="text"
          value={color}
          onChange={handleColorChange}
          className="border border-slate-500 w-40 mt-2"
        />
      </div>
    </div>
  );
}
