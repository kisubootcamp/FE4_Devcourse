export default function CountButton({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>0</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
