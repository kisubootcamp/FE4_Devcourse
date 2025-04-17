import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function Child({
  message,
  num,
  array,
  obj,
  isLoggedin,
  click,
  uname = () => "홍길동",
  value,
  text,
}: {
  message: string;
  num: number;
  array: string[];
  obj: { name: string; age: number };
  isLoggedin: boolean;
  click: () => void;
  value: (string | number)[];
  text: string;
  uname?: () => string;
}) {
  return (
    <>
      {/*1. **문자열을 `props`로 전달하기**
    `App` 컴포넌트에서 `Child` 컴포넌트로 `"Hello, World!"`라는 문자열을 전달하고, 
    `Child` 컴포넌트에서 이를 화면에 출력하시오. */}
      <Header />
      <h1>{message}</h1>
      <div>{num}</div>
      <div>{JSON.stringify(array, null, 2)}</div>
      <div>{JSON.stringify(obj, null, 2)}</div>
      <div>{isLoggedin.toString()}</div>
      <div onClick={() => click()}>버튼클릭</div>
      <div>{uname()}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
      <div className="text-[50px] text-red-500">{text}</div>
      <Content />
      <Footer />
    </>
  );
}
