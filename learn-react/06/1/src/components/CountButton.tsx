export default function CountButton({
  increment,
  decrement,
  resets,
}: {
  increment: () => void;
  decrement: () => void;
  resets: () => void;
}) {
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={resets}>0</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
