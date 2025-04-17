// export default function User(props: {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// }) {
//   //   console.log(props);
//   return (
//     <>
//       <h1>{props.message}</h1>
//       <h1>{props.count}</h1>
//       <h1>{props.isVisible.toString()}</h1>
//       <h1>{props.tags}</h1>
//       <h1>{JSON.stringify(props.tags, null, 2)}</h1>
//       <h1>{JSON.stringify(props.user, null, 2)}</h1>
//     </>
//   );
// }
// 객체는 표현식 자체가 불가능
// JSON.stringify(props.user, null, 2)
// JSON문자열로 바꿈: string 취급,  null: 다른걸넣진않음 , 2 : 간격

/* ======================================================================== */
// 구조분해할당
// export default function User({
//   message,
//   count,
//   isVisible,
//   tags,
//   user,
// }: {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// }) {
//   return (
//     <>
//       <h1>{message}</h1>
//       <h1>{count}</h1>
//       <h1>{isVisible.toString()}</h1>
//       <h1>{JSON.stringify(tags, null, 2)}</h1>
//       <h1>{JSON.stringify(user, null, 2)}</h1>
//     </>
//   );
// }

/* ======================================================================== */
// 인터페이스 -> 코드 깔끔
// interface User {
//   id: number;
//   name: string;
// }
// interface UserProps {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: User;
// }

// export default function User({
//   message,
//   count,
//   isVisible,
//   tags,
//   user,
// }: UserProps) {
//   return (
//     <>
//       <h1>{message}</h1>
//       <h1>{count}</h1>
//       <h1>{isVisible.toString()}</h1>
//       <h1>{JSON.stringify(tags, null, 2)}</h1>
//       <h1>{JSON.stringify(user, null, 2)}</h1>
//     </>
//   );
// }

/* ======================================================================== */
// 타입별칭
// type UserProps = {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// };
// export default function User({
//   message,
//   count,
//   isVisible,
//   tags,
//   user,
// }: UserProps) {
//   return (
//     <>
//       <h1>{message}</h1>
//       <h1>{count}</h1>
//       <h1>{isVisible.toString()}</h1>
//       <h1>{JSON.stringify(tags, null, 2)}</h1>
//       <h1>{JSON.stringify(user, null, 2)}</h1>
//     </>
//   );
// }

/* ======================================================================== */
// 공식문서 - 인터페이스 사용
// ****Props
// UserProps
// SettingsProps
// RegistersProps

// d.ts
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를
// 타입스크립트에 제공하기 위해 사용하는 파일 형식

/* ======================================================================== */
// 이벤트
//
export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  myFunction3,
  greet,
}: {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: { id: number; name: string };
  myFunction3: (
    e: React.MouseEvent<HTMLButtonElement>,
    message: string
  ) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const myFunction = () => {
    alert("click");
  };
  const myFunction2 = (message: string) => {
    alert(message);
  };
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
      <button onClick={myFunction}>클릭</button>
      <button onClick={() => myFunction2("hello 2")}>클릭2</button>
      <button onClick={(e) => myFunction3(e, "hello 3")}>클릭3</button>
      <button onClick={greet}>greet</button>
      <input type="text" onChange={changeHandler} />
      <div>
        ==========================================================================
      </div>
    </>
  );
}
// 내부에서 함수를 정의할 때는 함수선언문 x
