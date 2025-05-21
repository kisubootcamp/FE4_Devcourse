import { useEffect, useState } from "react";

// 컴포넌트가 해제될 때 (언마운트)
export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("name");

  // 마운트
  // 컴포넌트가 생성될 때 최초 1회만 발생, 아래와 같이 작성하면
  useEffect(() => {
    console.log("App Mounted");

    return () => {
      console.log("count UnMounted");
    };
  }, []);
  //의존성 배열이 다를 경우, 유즈이펙트는 여러번 사용할 수 있음
  // 특성 상태나 값이 변경됨을 인지하고 사용하고 싶을 때 사용
  // 의존성 배열에 감시하고 싶은 값을 넣어서 사용
  useEffect(() => {
    console.log("count changed:" + count);
  }, [count]);
  useEffect(() => {
    console.log("name changed:" + name);
  }, [name]);
  return (
    <>
      <h1 className="text-3xl underline">Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName(() => "sucoding")}>이름 변경</button>
    </>
  );
}
