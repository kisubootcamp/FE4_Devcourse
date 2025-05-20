import { useState } from "react";

// 제어 컨트롤러 방식
// 폼(요소) 제어
export default function App() {
  const [text, setText] = useState("");
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const [text2, setText2] = useState("");
  // const changeHandler2 = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setText2(e.target.value);
  // };

  return (
    <>
      <pre>{text}</pre>
      <textarea value={text} onChange={changeHandler}></textarea>
      <input
        type="text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
    </>
  );
}
