import { useEffect, useState } from "react";
export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("timer");
      setTimer((timer) => timer + 1);
      //setTimer(timer+1);로 하면 딱 1만 증가함
      // (클로저 현상(setINterval이 계속 실행되므로 메모리위에 올라와있음, 최신 timer값 받아오지 못하고 0에 머무름))
    }, 1000);
    return () => {
      clearInterval(interval); //해주면 증가값이 누적되면서 증가되지않음 메모리 누수 해결
    };
  }, []);
  return (
    <>
      <h1>Timer:{timer}</h1>
    </>
  );
}
