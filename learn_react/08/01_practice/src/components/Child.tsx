import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface ChildProps {
  hello: string;
  num: number;
  str: string[];
  user: { name: string; age: number };
  isLoggedIn: boolean;
  clickEvent: () => void;
  name: string;
  value: (string | number)[];
  style: React.CSSProperties;
  // style: { fontSize: string; color: string };
}

export default function Child({
  hello,
  num,
  str,
  user,
  isLoggedIn,
  clickEvent,
  name,
  value,
  style,
}: ChildProps) {
  return (
    <>
      <h1>
        {hello}, {num}
      </h1>
      <p>{JSON.stringify(str, null, 2)}</p>
      <p>
        {user.name}, {user.age}
      </p>
      <p>{isLoggedIn ? "로그인 됨" : "로그인 안됨"}</p>
      <button onClick={clickEvent}>버튼</button>
      <p>{name ? name : "홍길동"}</p>
      <p style={style}>{JSON.stringify(value)}</p>
      <Header />
      <Content></Content>
      <Footer />
    </>
  );
}
