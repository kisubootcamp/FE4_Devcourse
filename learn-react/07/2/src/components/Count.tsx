import { useEffect, useState } from 'react';

// 사이드 이펙트(side effect)

// useEffect 훅
// 컴포넌트가 생성될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 때 (업데이트)
// 컴포넌트가 해제될 때 (언마운트)

export default function Count() {
  const [count, setCount] = useState(0);

  // 마운트
  useEffect(() => {
    console.log('Count Mounted');

    // 컴포넌트 사라질 때
    return () => {
      console.log('Count UnMounted');
    };
  }, []);

  // 의존성이 다를 경우 useEffect 여러 번 사용 가능
  useEffect(() => {
    console.log('count change: ' + count);
  }, [count]);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
