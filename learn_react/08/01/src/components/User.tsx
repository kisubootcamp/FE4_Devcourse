// type UserProps = {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// };

// export default function User({
//   message, // 이렇게 하면 구조분해 할당
//   count,
//   isVisible,
//   tags,
//   user,
// }: UserProps) {
//   //   console.log(props);
//   return (
//     <>
//       <h1>
//         User Component : {message}/ {count} / {isVisible.toString()} /{" "}
//         {JSON.stringify(tags, null, 2)}
//       </h1>
//       <p>{JSON.stringify(user)}</p>
//     </>
//   );
// }
export default function User(props: {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: { id: number; name: string };
  myFunction: (message: string) => void;
  // greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
  greet: () => void;
}) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("changeHandler");
    console.log(e.target.value);
  };
  return (
    <>
      <h1>{props.message}</h1>
      <button
        onClick={() => {
          props.myFunction("hello");
        }}
      >
        버튼
      </button>
      <button onClick={props.greet}>greet</button>
      {/* e의 타입을 정의해주기 어렵다면 아래처럼 {(e) => changeHandler(e)}
      를 하면 마우스 갖다대면 타입을 추론 해준다. 
      그리고 매개변수를 전해줄게 없다면 원상복구 해놓을 것 */}
      <input type="text" onChange={changeHandler} />
    </>
  );
}
