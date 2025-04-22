// 사이드이펙트: 컴포넌트 렌더링 외부 작업
// useEffect 훅
// 컴포넌트가 생성될 때 (마운트)
// 컴포넌트의 상태값이 변경될 때 (업데이트)
import { useEffect, useState } from 'react';

// 컴포넌트가 해제 될 때 (언마운트)
export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  // 마운트
  useEffect(() => {
    console.log('Count Mounted');

    //언마운트
    return () => {
      console.log('Count Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('count Change' + count);
    console.log('name change' + name);
  }, [count, name]);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setName('Sucoding Handsome')}>이름변경</button>
    </>
  );
}
