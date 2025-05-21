import { useState } from 'react';
import Count from './components/Count';

export default function App() {
  console.log('App Component');
  const [count, setCount] = useState(0);
  //하위 컴포넌트들이 리렌더링 일어남
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <Count />
    </>
  );
}
