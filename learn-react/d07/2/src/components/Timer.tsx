import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setTimer((timer) => timer + 1);
      console.log("timer!");

      // 아래와 같이 작성하면 클로저 상태에 빠져서 timer의 최신 값을 읽어올 수 없음.
      // 따라서 timer의 값은 항상 1임.
      // 콜백 함수 형태로 작성하면 제대로 작동함.
      // setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Timer: {timer}</h1>
    </>
  );
}
