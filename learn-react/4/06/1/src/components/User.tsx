// type UserProps =  {
//   message: string;
//   count: number;
//   isVisible: boolean;
//   tags: string[];
//   user: { id: number; name: string };
// }

import React from "react";

// ***Props (*** 은 컴포넌트의 이름이 들어가게 명명하는게 편함)
// UserProps
// SettingProps
// RegisterProps
// 매개변수를 받는 부분을 아무것도 써놓지 않은 다음 App.tsx의 오류메메세지에서 나오는 타입을 긁어옴

//이벤트
// 이벤트 속성 HTML 태그에서 사용할 수 있는 이벤트 속성
// onClick
export default function User({
  message,
  count,
  isVisible,
  tags,
  user,
  myFunction,
}: {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
  myFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => void;
  greet: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const changeHandleer = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(e.nativeEvent);
  };
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{isVisible.toString()}</h1>
      <h1>{JSON.stringify(tags, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      {/* 매개변수를 전달할 방법이 없음  */}
      <button onClick={(e) => myFunction(e, "Hello")}>버튼</button>
      <button onClick={greet}>greet</button>

      <input type="text" onChange={(e) => changeHandleer(e)} />
      {/* 이벤트 객체 타입을 모를 때 */}
    </>
  );
}
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
