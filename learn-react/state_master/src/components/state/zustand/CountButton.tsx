import { useCounterStore } from "../../../stores/counterStore";

export default function CountButton() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
// 리렌더링 최적화가 되어있는데 전역 상태를 남발하면 안되는 이유: 코드 추적이 어렵다
