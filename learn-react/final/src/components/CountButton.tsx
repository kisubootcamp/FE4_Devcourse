import { useCountStore } from "../stores/countStore";

export default function CountButton() {
  const increment = useCountStore((state) => state.increment);
  const reset = useCountStore((state) => state.reset);
  const decrement = useCountStore((state) => state.decrement);

  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
