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
  // React.CSSProperties -> 넘어오는 값이 CSS 타입이면 인식함
  Header: React.ReactNode; // React.ReactElement -> 컴포넌트 전달
  Content: React.ReactNode; // unknown
  Footer: React.ReactNode;
}) {
  console.log(value);
  return (
    <>
      <h1>{message}</h1>
      <h1>{count}</h1>
      <h1>{JSON.stringify(fruits, null, 2)}</h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{isLoggedIn.toString() ? "로그인됨" : "로그인 안됨"}</h1>
      <button onClick={myButton}>클릭</button>
      <h1>{name}</h1>
      <h1>{JSON.stringify(value, null, 2)}</h1>
      <h1 style={style}>Child Component</h1>
      {Header}
      {Content}
      {Footer}
    </>
  );
}
