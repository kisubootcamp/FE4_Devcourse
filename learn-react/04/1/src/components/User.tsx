// export default function User(props: {
//   message: string;
//   count: number;
//   isVisible: boolean; //boolean은 출력되지 않음 jsx에서 .toString() 적용해야 보임
//   tags: string[]; //전체 배열을 문자열로 받아서 출력 JSON.stringfy(값,null,최대 스페이싱(요소 간))
//   user: { id: number; name: string };
// }) {
//   return (
//     <>
//       <h1>{props.message}</h1>
//       <h1>{props.count}</h1>
//       <h1>{props.isVisible.toString()}</h1>
//       <h1>{JSON.stringify(props.tags, null, 2)}</h1>
//       <h1>{JSON.stringify(props.user, null, 2)}</h1>
//     </>
//   );
// }

//구조 분해 할당, 인터페이스(또는 타입별칭)
//타입스크립트의 타입별칭과 jsx의 함수이름은 중복되어도 상관없음
//props.d.ts에 UserProps가 정의되어 있음

//***Props
//UserProps
//SettingsProps
//RegisterProps

//이벤트
//이벤트 속성 HTML 태그에서 사용할 수 있는 이벤트 속성
//자바스크립트처럼 addEventListener, querySelector 사용하지 않음
//onclick
export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  myFunction,
  greet,
}: UserProps) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //제네릭타입
    console.log(e.target.value); //리액트는 자바스크립트 객체를 SyntheticBaseEvent로 한번 감싸줌 (서로 다른 브라우저를 같이 사용하기 위해(?))
    //자바스크립트와 동일하게 사용하면 됨
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{isVisible.toString()}</h1>
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      {/* <button onClick={myFunction()}>클릭</button> */}
      {/* 클릭안해도 myFunction()호출되어버림 */}
      {/* 매개변수 필요할때 */}
      {/* <button onClick={() => myFunction("hello")}>클릭</button> //매개변수 없을때*/}
      <button onClick={(e) => myFunction(e, "hello")}>클릭</button>
      {/* 매개변수 필요없을떄 */}
      <button onClick={greet}>greet</button>
      <input type="text" onChange={changeHandler} />
      //암묵적으로 changeHandler의 e로 이벤트 객체가 즉시전달
      <input type="text" onChange={(e) => changeHandler(e)} /> //이벤트 객체의
      타입추론이 가능함(약간 변수로 먼저 받은 후 함수에 넣으므로
      타입추론가능한듯?) //이걸로 타입 알아내고 const changeHandler의 e에 타입
      복붙해서 작성후 삭제
    </>
  );
}

// //User() 에 매개변수 넣지않은 후 App.tsx에서 에러창에 뜬 타입지정 복사,붙여넣기할 수 있음
// export default function User(props: {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// }) {}
