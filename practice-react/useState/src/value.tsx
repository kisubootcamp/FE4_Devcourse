import { useState } from 'react';

export default function App2() {
  const [values, setValues] = useState<string[]>([]);
  const clickHandler = () => {
    setValues((values) => [...values, 'apple']);
  };
  return (
    <>
      <button onClick={clickHandler}>클릭</button>
      <h1>{values.join(',')}</h1>
    </>
  );
}

// 여기서 불변성이란, useState 안에 있는 values 의 값을 직접 바꾸지 않고
// ...values 로 값을 풀어주고 그 뒤에 추가를 한다
