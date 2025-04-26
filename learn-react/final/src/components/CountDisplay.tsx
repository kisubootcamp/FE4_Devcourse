import { useCountStore1 } from "../stores/countStore";

export default function CountDisplay () {
  const count = useCountStore1((state) => state.count)
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}