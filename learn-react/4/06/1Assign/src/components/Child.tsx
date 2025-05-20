// import React from "react";

export default function Child({
  greet,
  num,
  fruits,
  info,
  isLoggedIn,
  clickFunc,
  name = "홍길동",
  value,
  style,
  Header,
  Content,
  Footer,
}: {
  greet: string;
  num: number;
  fruits: string[];
  info: { name: string; age: number };
  isLoggedIn: boolean;
  clickFunc: () => void;
  name?: string;
  value: string | number | unknown[];
  style: React.CSSProperties;
  // style: {fontSize:string, color:string};
  Header: React.ReactElement;
  Content: React.ReactElement;
  Footer: React.ReactElement;
}) {
  return (
    <>
      <h1>{greet}</h1>
      <h1>{num}</h1>
      <h1>{JSON.stringify(fruits, null, 2)}</h1>
      <h1>{info.name}</h1>
      <h1>{info.age}</h1>
      <h1>{isLoggedIn ? "로그인됨" : "로그인안됨"}</h1>
      <button onClick={clickFunc}>버튼</button>
      <h1>{name}</h1>
      <h1>{JSON.stringify(value, null, 2)}</h1>
      <h1 style={style}>Child Style</h1>
      <h1>{Header}</h1>
      <h1>{Content}</h1>
      <h1>{Footer}</h1>
    </>
  );
}
