import React, {useState} from "react";

export default function ColorBox() {
  const [input, setInput] = useState("");
  const chgangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className='item-middle'>
        <div className='flex flex-col'>
          <div className='w-40 h-40 border border-slate-500' style={{backgroundColor: input}}></div>
          <input
            type='text'
            className='border border-slate-500 w-40 mt-2'
            value={input}
            onChange={chgangeHandler}
          />
        </div>
      </div>
    </>
  );
}
