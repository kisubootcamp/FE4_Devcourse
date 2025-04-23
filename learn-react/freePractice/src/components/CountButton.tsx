export default function CountButton({ increment }: { increment: () => void }) {
  return (
    <>
      <button onClick={increment}>증가</button>
    </>
  );
}
