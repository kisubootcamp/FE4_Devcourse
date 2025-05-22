import { useCountStore1 } from "../stores/countStore";

export default function CountButton () {
  const decrement = useCountStore1((state) => state.decrement)
  const reset = useCountStore1((state) => state.reset)
  const increment = useCountStore1((state) => state.increment);
  return (
    <>
      <button onClick = {decrement}>-</button>
      <button onClick = {reset}>0</button>
      <button onClick = {increment}>+</button>
    </>
  );
}