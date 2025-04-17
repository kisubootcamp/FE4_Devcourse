// 또는 인터페이스
// interface UserProps {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
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

// 이벤트
// 이벤트 속성 (HTML 관점): HTML 태그에서 사용할 수 있는 이벤트 관련 속성
// onclick
// 두가지 방법이 있음. 2번째 방법은 매개변수가 있을 때 사용된다.

type User = {
  id: number;
  name: string;
};

type UserProps = {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
};

export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
}: UserProps) {
  const myFunction = () => {
    alert('click');
  };
  const myFunction2 = (message: string) => {
    alert(message);
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  // };
  const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(e.nativeEvent);
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{isVisible.toString()}</h1>
      <pre>{JSON.stringify(tags, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={myFunction}>클릭</button>
      <button
        onClick={() => {
          myFunction2('hello');
        }}
      >
        버튼2
      </button>
      <button onClick={greet}>greet</button>
      {/* 화살표 함수가 아닐때는 이벤트 객체로 전달된다 (암묵적으로 59번쨰 줄 e)*/}
      {/* 화살표 함수일 때는 명시적으로 이벤트 객체를 전달해주어야한다 */}
      <input type="text" onChange={changeHandler} />
      <input type="text" onChange={(e) => {}} />
    </>
  );
}
