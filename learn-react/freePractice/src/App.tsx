import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const [text2, setText2] = useState('');
  const changeHandler2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <textarea value={text} onChange={changeHandler}></textarea>
      <input type="text" value={text2} onChange={changeHandler2} />
    </>
  );
}
