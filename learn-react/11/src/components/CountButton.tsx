export default function CountButton({
  increment,
  decrement,
  reset,
}: {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={increment}
      >
        증가
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={decrement}
      >
        감소
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={reset}>
        초기화
      </button>
    </div>
  );
}
