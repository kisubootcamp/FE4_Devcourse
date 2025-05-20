import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<null | string>(null);

  const increment = () => {
    // 상태업데이트함수(값)
    // 상태업데이트함수(콜백함수)

    // setCount(10);
    setCount((count) => count + 1);
  };

  const changeName = () => {
    setName("홍길동");
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className="text-3xl underline">Count: {count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>0리셋</button>
      <h1>name: {name}</h1>
      <button onClick={changeName}>이름변경</button>
    </>
  );
}
