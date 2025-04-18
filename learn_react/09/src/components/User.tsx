export default function User({
  id,
  name,
  age,
  clickHandler,
}: {
  id: number;
  name: string;
  age: number;
  clickHandler?: () => void;
  //   name: string;
  //   age: number;
}) {
  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
      <p>{age}</p>
      {clickHandler && <button onClick={clickHandler}>클릭!</button>}
    </>
  );
}
