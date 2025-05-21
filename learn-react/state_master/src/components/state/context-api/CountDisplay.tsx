import { useContext } from "react";
import { CounterContext } from "../../../context/CounterContext";

export default function CountDisplay() {
  // null 보장 연산자 사용
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
