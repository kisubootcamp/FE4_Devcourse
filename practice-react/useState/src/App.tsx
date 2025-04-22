// 1. useState
// 불변성을 지켜서 업데이트를 해줘야한다.
// 한번 정의한 데이터는 직접적으로 변하지 않도록 한다는 뜻

import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </>
  );
}
