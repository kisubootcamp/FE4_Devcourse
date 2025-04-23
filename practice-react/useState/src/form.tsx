import { useState } from 'react';

export default function Form() {
  const [input, setInput] = useState('');
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };

  const [textArea, setTextArea] = useState('');
  const textAreaHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log(textArea);
  };
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>전송</button>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <button onClick={textAreaHandler}>전송2</button>
      </form>
    </>
  );
}
