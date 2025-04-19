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
}) {
  // 전달할 때 App에서 스프레드 연산자로 받을 수 있다.
  return (
    <>
      {/* <h1>{JSON.stringify(user, null, 2)}</h1> */}
      {/* <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1> */}
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {clickHandler && <button onClick={clickHandler}>클릭</button>}
    </>
  );
}
