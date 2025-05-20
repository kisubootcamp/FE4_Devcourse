import { useCountStore } from "../stores/countStore";

export default function CountDisplay() {
  const { count } = useCountStore();

  return (
    <>
      <div>Count: {count}</div>
    </>
  );
}
