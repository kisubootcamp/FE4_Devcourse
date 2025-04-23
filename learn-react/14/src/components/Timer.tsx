import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 의존성 배열에 timer 가 있어야 아래의 방법이 적용됨
      setTimer(timer + 1);
      // 의존성 배열에 없다면 아래의 방법이 적용됨
      // setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <>
      <div>Timer: {timer}</div>
    </>
  );
}
