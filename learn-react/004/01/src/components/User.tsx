// 이벤트
// 이벤트 속성: HTML 태그에서 사용할 수 있는 이벤트 속성
// onclick 이벤트
export default function User({
  msg,
  cnt,
  isVisible,
  tags,
  user,
  myFunction,
  greet,
}: {
  msg: string;
  cnt: number;
  isVisible: boolean;
  tags: string[];
  user: { id: number; name: string };
  myFunction: (msg: string) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>{msg}</h1>
      <h1>{cnt}</h1>
      <h1>{isVisible.toString()}</h1>
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      <button
        onClick={() => {
          myFunction("hello");
        }}
      >
        클릭
      </button>
      <button onClick={(e) => greet(e)}>greet</button>
      <input type="text" onChange={(e) => changeHandler(e)} />
    </>
  );
}
