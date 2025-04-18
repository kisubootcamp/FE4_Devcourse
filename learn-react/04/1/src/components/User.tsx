// d.ts
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 위해 사용하는 파일 형식
// 이 파일이 그냥 ts 파일이면 타입 정의 부분에서 오류 생김

// 타입 별칭의 타입명과 컴포넌트명은 중복돼도 괜찮음
export default function User({
  // 구조분해할당
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
  user: {id: number; name: string};
  myFunction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, message: string) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{isVisible.toString()}</h1>
      <h1>{tags}</h1>
      {/* 배열 : 표현식으로 출력은 가능하지만 요소가 전부 합쳐져서 출력 */}
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      {/* 객체 : 표현식으로 출력 불가능 */}
      <h1>{JSON.stringify(user, null, 2)}</h1>
      <button onClick={(e) => myFunction(e, "Hello")}>click</button>
      <button onClick={(e) => greet(e)}>greet</button>
      <input type='text' onChange={changeHandler} />
    </>
  );
  // stringify : 주어진 데이터를 json 문자열 형태로 변환해서 출력해주는 것
  // 두 번째 매개변수는 쓸 일 없음, 세번째 매개변수 쓰기 위해 null 입력하는 것
  // 세 번째 매개변수는 간격 주는 용도

  // SyntheticBaseEvent 로 감싸는 이유?
  // -> 서로 다른
}
