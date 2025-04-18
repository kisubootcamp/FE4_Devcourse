// import하고 타입을 지정해도 되지만, 타입 지정을 할 때는 import하지 않아도 됨.
// import React from "react";

export default function Child({
  str,
  num,
  arr,
  obj,
  isLoggedIn,
  onClick,
  name = "홍길동",
  // name,
  value,
  style,
  Header,
  Content,
  Footer,
}: {
  str: string;
  num: number;
  arr: string[];
  obj: { name: string; age: number };
  isLoggedIn: boolean;
  onClick: () => void;
  name?: string;
  value: string | number | unknown[];
  // React.CSSProperties 타입을 지정하면 CSS 속성이 계속 늘어나도 일일이 타입을 지정해줄 필요가 없음.
  style: React.CSSProperties;
  // React.ReactNode 또는 React.ReactElement 둘 다 가능함.
  // unknown으로 푸는 것도 현재는 맞음.
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}) {
  return (
    <>
      <h1>{str}</h1>
      <h1>{num}</h1>
      <h1>
        {JSON.stringify(arr, null, 2)}, {arr}
      </h1>
      <h1>
        {obj.name}, {obj.age}
      </h1>
      <h1>{isLoggedIn ? "로그인 됨" : "로그인 안 됨"}</h1>
      <button onClick={onClick}>onClick</button>
      <h1>{name}</h1>
      {/* <h1>{name || "홍길동"}</h1> */}
      <h1>{JSON.stringify(value)}</h1>
      <h1 style={style}>style</h1>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
