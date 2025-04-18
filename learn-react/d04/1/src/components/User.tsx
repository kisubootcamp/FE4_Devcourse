// d.ts
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 위해 사용하는 파일 형식.

// 이벤트
// 이벤트 속성 : HTML 태그에서 사용할 수 있는 이벤트 속성
// onclick
export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  myFunction,
  greet,
}: {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: { id: number; name: string };
  myFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      {/* true, false는 기본적으로 보이지 않으므로 toString() 내장 메서드를 이용해야 볼 수 있음 */}
      <h1>{isVisible.toString()}</h1>
      {/* {props.tags}를 하면 배열 요소가 하나로 합쳐져서 출력됨 */}
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      {/* 객체는 표현식으로 출력 자체가 불가능함 */}
      <h1>{JSON.stringify(user, null, 2)}</h1>
      <button onClick={(e) => myFunction(e, "Hello~!~!!")}>클릭</button>
      <button onClick={greet}>greet</button>
      <input type="text" onChange={(e) => changeHandler(e)} />
    </>
  );
}
