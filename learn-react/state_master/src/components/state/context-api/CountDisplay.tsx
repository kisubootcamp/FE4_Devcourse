import { useContext } from "react";
import { CounterContext } from "../../../context/CounterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!; //널보장 연산자(절대 널이 아니다)
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
