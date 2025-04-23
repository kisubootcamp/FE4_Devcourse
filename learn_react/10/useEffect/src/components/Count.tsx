import { useEffect, useState } from "react";
export default function Count() {
  const [count, setCount] = useState(0);
  // 마운트 : 의존성 함수를 빈 배열로 설정하기
  // 마운트와 언마운트
  useEffect(() => {
    console.log("Count Mounted");
    return () => {
      console.log("Count unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("count change : " + count);
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
