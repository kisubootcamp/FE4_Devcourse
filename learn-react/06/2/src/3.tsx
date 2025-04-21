import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('orange');
  const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput(e.target.value);
  };
  const [checked, setChecked] = useState(false);
  const handlerCheckbox = () => {
    setChecked((checked) => !checked);
  };
  return (
    <>
      <p>selected: {input}</p>
      <select value={input} onChange={handlerSelect}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
      <input type="checkbox" checked={checked} onChange={handlerCheckbox} />
      {checked && <h1>선택됨</h1>}
    </>
  );
}
