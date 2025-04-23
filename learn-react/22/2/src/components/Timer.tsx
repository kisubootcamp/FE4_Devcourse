import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
      // 콜백함수는 항상 최신의 값을 불러오는 것을 보장한다.
      // setTimer(timer + 1);
      // 클로저 현상으로 타이머가 1만 오르고 멈춤
      // 클로저 현상에 빠져서 timer의 실시간값을 불러올 수 없다.
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(interval);
    }; // 메모리 누수 방지용
    // setInterval 초기화
  }, []);
  return (
    <>
      <h1>Timer: {timer}</h1>
    </>
  );
}
// setInterval 사용 불가
// timer값이 setInterval로 변경될 때마다 리렌더링되고 리렌더링 될때마다 setInterval이 호출되어 계속 연산이 중첩됨
// useEffect 안에 있으면 중첩되지 않는다.
