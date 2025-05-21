import { useCountStore } from "../stores/countStore";

export default function CountButton() {
  const { increment, decrement, reset } = useCountStore();

  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
}
