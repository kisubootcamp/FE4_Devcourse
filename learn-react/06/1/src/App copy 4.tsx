import { useState } from "react";

// 제어 컨트롤러 방식
// 폼(요소) 제어
export default function App() {
  const [text, setText] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const resetHandler = () => {
    setText("");
  };

  return (
    <>
      <h1>input: {text}</h1>
      <input type="text" value={text} onChange={changeHandler} maxLength={4} />
      {text.length >= 4 && <p>4글자 이상은 작성할 수 없습니다.</p>}

      <button onClick={resetHandler}>리셋</button>
    </>
  );
}
