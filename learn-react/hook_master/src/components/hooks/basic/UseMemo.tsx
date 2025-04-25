import { useState, useMemo } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    selected: i === 29_999_998,
  };
});

//const items = initialItems;
//useMemo(콜백함수,의존성배열):값을 메모이제이션할때 사용
export default function UseMemo() {
  const [count, setCount] = useState(0);

  // 불필요한 연산을 만들어준 것
  // 3000만개의 배열 데이터를 렌더링 마다 재생성하고 있음

  const [items] = useState(initialItems);

  // const selectItems = items.find((item) => item.selected);
  const selectItems = useMemo(() => items.find((item) => item.selected), []); //[items]는 바뀔 가능성이 있는 값임을 암시(안쓰면 경고뜸)
  //{id:29_999_998,selected:true)} 메모리에 29,999,998개의 데이터를 가진 배열을 저장해놨다가 꺼내사용

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
      <p>{selectItems?.id}</p>
    </>
  );
}
//메모이제이션: useCallBack,React.Memo,useMemo
//React.Memo:컴포넌트 메모이제이션
//useMemo:값을 메모이제이션
//useCallback:함수 메모이제이션
