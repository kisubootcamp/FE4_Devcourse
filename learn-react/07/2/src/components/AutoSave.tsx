import { useEffect, useState } from "react";

export default function AutoSave() {
  const [text, setText] = useState("");
  const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  useEffect(() => {
    const saveText = localStorage.getItem("savedText");
    if (saveText) {
      setText(saveText);
    }
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      localStorage.setItem("savedText", text);
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [text]);
  return (
    <>
      <h1>{text}</h1>
      <textarea value={text} onChange={textChangeHandler}></textarea>
    </>
  );
}
//todo-list : const uuid=useId(); 각각의 고유 아이디 생성(input이 여러개일때)
// 함수내부에서 key값으로는 사용불가(리렌더링시 다른 아이디로 변경되므로 고유한 아이디로 사용할 수가 없음=>useState의 초기값등 한번 선언하면 바뀌지않는 값에 적용)
// use로 시작하는 리액트는 최상위 루트에서 호출되어야함함
