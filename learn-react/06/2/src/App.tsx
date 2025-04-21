import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const resetHandler = () => {
    setText('');
  };
  return (
    <>
      <input type="text" value={text} onChange={changeHandler} maxLength={4} />
      {text.length >= 4 && <p>4글자 이상은 작성할 수 없습니다.</p>}
      <button onClick={resetHandler}>입력값 리셋하기</button>
      <textarea name="" id="" value={text} onChange={changeHandler}></textarea>
    </>
  );
}
