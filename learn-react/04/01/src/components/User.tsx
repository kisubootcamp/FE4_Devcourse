// export default function User(props: {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// }) {
//   console.log(props);
//   return (
//     <>
//       <h1>{props.message}</h1>
//       <h1>{props.count}</h1>
//       <h1>{props.isVisible.toString()}</h1>
//       {/* boolean을 출력해야한다면 toString을 사용 */}
//       <h1>{props.tags}</h1>
//       {/* 배열을 렌더링하려고 하면 배열 요소가 하나로 합쳐져서 나온다. */}
//       <h1>{JSON.stringify(props.tags, null, 2)}</h1>
//       <h1>{JSON.stringify(props.user, null, 2)}</h1>
//       {/* 리액트에서 객체를 표현식으로 출력하면 전체가 다운되는 오류가 있다. */}
//     </>
//   );
// }

// 선택적 작업

// ***Props
// UserProps, SettingsProps, RegisterProps
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
      {/* boolean을 출력해야한다면 toString을 사용 */}
      <h1>{tags}</h1>
      {/* 배열을 렌더링하려고 하면 배열 요소가 하나로 합쳐져서 나온다. */}
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      {/* 리액트에서 객체를 표현식으로 출력하면 전체가 다운되는 오류가 있다. */}
      {/* <button onClick={myFunction}>클릭</button> */}
      {/* 매개변수가 필요 없을 때 사용 */}
      <button onClick={(e) => myFunction(e, "Hello")}>클릭</button>
      <button onClick={(e) => greet(e)}>greet</button>
      <input type="text" onChange={changeHandler} />
    </>
  );
}
// 매개변수가 필요할 떄 사용
// 중괄호를 이용해 연속적으로 이벤트를 연결해서 출력해줄 수 있다.
// 리액트 자체적으로 자바스크립트 이벤트 객체를 syntatic base event객체로 한번 감쌈
// 타입 추론을 활용
// changeHandler의 e가 암묵적으로 화살표 함수의 괄호 안으로 전달됨
// 핸들러가 알아서 타입을 추론함
