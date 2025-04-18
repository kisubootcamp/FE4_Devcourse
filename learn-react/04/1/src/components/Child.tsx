import React from "react";

export default function Child({
  message,
  count,
  fruits,
  user,
  isLoggedIn,
  myButton,
  name = "홍길동",
  value,
  style,
  Header,
  Content,
  Footer,
}: {
  message: string;
  count: number;
  fruits: string[];
  user: { name: string; age: number };
  isLoggedIn: boolean;
  myButton: () => void;
  name?: string;
  value: string | number | unknown[];
  style: { fontSize: string; color: string };
  Header: React.ReactElement;
  Content: React.ReactNode;
  Footer: unknown;
}) {
  return (
    <>
      <h1>{message}</h1>
      <h2>{count}</h2>
      <h3>{JSON.stringify(fruits, null, 2)}</h3>
      <h3>
        {user.name} {user.age}
      </h3>
      <h3>{isLoggedIn ? "로그인됨" : "로그인 안됨"}</h3>
      <button onClick={myButton}>클릭</button>
      <h1>{name}</h1>
      <h1>{JSON.stringify(value, null, 2)}</h1>
      <h1 style={style}>딩딩딩딩딩</h1>
      <>
        {Header}
        {Content}
        {Footer}
      </>
    </>
  );
}
