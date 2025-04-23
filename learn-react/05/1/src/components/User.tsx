export default function User({
  id,
  name,
  clickHandler,
}: {
  id: number;
  name: string;
  clickHandler?: () => void;
}) {
  return (
    <>
      <h1>{id}</h1>
      <h1>{name}</h1>
      {clickHandler && <button onClick={clickHandler}>클릭</button>}
    </>
  );
}
