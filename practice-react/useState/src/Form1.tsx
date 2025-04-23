import { useState } from 'react';

export default function Form1() {
  const [text, setText] = useState('');

  const texthandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={texthandler}>제출</button>
    </>
  );
}
