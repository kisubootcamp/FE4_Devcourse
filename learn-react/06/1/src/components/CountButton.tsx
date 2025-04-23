export default function CountButton({
  increment,
  decrement,
  resetCount,
}: {
  increment: () => void;
  decrement: () => void;
  resetCount: () => void;
}) {
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={resetCount}>0</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
