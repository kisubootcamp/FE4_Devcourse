import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

type ChildProps = {
  str: string;
  num: number;
  arr: string[];
  obj: { name: string; age: number };
  isLoggedIn: boolean;
  buttonClick: () => void;
  name: string;
  value: string | number | string[];
  style: { fontSize: string; color: string };
};
export default function Child({
  str,
  num,
  arr,
  obj,
  isLoggedIn,
  buttonClick,
  value,
  style,
  name = "홍길동",
}: ChildProps) {
  return (
    <>
      <Header />
      <Content />
      <div>${str}</div>
      <div>${num}</div>
      <div>${JSON.stringify(arr, null, 2)}</div>
      <div>${JSON.stringify(obj, null, 2)}</div>
      <div>${isLoggedIn ? "로그인 됨" : "로그인 안 됨"}</div>
      <button onClick={() => buttonClick()}>버튼</button>
      <div>${name}</div>
      <div>${value}</div>
      <div style={style}>style 적용 되는지 확인</div>
      <Footer />
    </>
  );
}
