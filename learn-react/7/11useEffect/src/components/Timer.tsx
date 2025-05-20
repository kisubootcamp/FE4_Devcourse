import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
      //   setTimer(timer + 1); 클로저에 들어가 timer 값는 계속 1, 콜백함수로 적어야..
    }, 1000);

    // 꼭 return clearInterval ..
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Timer : {timer}</h1>
    </>
  );
}
