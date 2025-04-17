// 이벤트
// 이벤트 속성 HTML태그에서 사용할 수 있는 이벤트 속성
export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  greet,
  myFunction,
}: {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: { id: number; name: string };
  greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
  myFunction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, message: string) => void;
}) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{isVisible.toString()}</h1>
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      <button onClick={greet}>greet</button>
      <button onClick={(e) => myFunction(e, "Hello")}>클릭</button>
      <input type="text" onChange={changeHandler} />
    </>
  );
}
