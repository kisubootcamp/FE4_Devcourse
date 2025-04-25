//사이드 이펙트(side effect) : 컴포넌트 렌더링 제외한 모든 작업
//useEffect 훅
// 컴포넌트가 생성될 때 (마운트)
// 컴포넌트의 상태 값이 변경될 때 (업데이트)
//컴포넌트가 해제될 떄 (언마운트)

import { useEffect, useState } from "react";
export default function Count() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //마운트
  useEffect(() => {
    console.log("Count Mounted"); //생성시 한번만 호출됨
    return () => {
      console.log("Count UnMounted"); //컴포넌트에서 언마운트하면서 데이터 정리할때
    }; //내부적으로 콜백함수 리턴가능(컴포넌트 해제시 한번만 호출됨)
  }, []); //컴포넌트 생성시 한번 호출됨(아무리 리렌더링되어도 다시 실행되지는 않음)

  useEffect(() => {
    console.log("count change:" + count);
    console.log("count change:" + name);
  }, [count, name]); //데이터 업데이트될때마다 호출됨

  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => setName("sucoding handsome")}>증가</button>
    </>
  );
}
