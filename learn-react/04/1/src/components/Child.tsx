export default function Child({
  message,
  num,
  arr,
  user,
  isLoggedIn,
  name = "홍길동",
  value,
  style,
  Header,
  Content,
  Footer,
}: {
  message: string;
  num: number;
  arr: string[];
  user: { name: string; age: number };
  isLoggedIn: boolean;
  name?: string;
  value: string | number | unknown[];
  style: { fontSize: string; color: string };
  // style: React.CSSProperties;
  Header: unknown;
  Content: unknown;
  Footer: unknown;
}) {
  const clickFunction = (message: string) => {
    alert(message);
  };

  return (
    <>
      <h1>{message}</h1>
      <h1>{num}</h1>
      <h1>{JSON.stringify(arr, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      <h1>{isLoggedIn.toString() ? "로그인됨" : "로드인 안됨"}</h1>
      <button onClick={() => clickFunction("click")}>클릭</button>
      <h1>{name}</h1>
      <h1>{JSON.stringify(value, null, 2)}</h1>
      <h1 style={style}>Child Component</h1>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
