import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!; // CounterContext 객체를 매개변수로 하고 null 보장 연산자 사용
  return (
    <>
      {" "}
      <h1>Count: {count}</h1>{" "}
    </>
  );
}
