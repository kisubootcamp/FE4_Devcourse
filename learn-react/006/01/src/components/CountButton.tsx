export default function CountButton({
  inc,
  dec,
  res,
}: {
  inc: () => void;
  dec: () => void;
  res: () => void;
}) {
  return (
    <>
      <button onClick={inc}>증가</button>
      <button onClick={dec}>감소</button>
      <button onClick={res}>리셋</button>
    </>
  );
}
