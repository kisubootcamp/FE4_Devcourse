import Child from "./components/Child";
import Profile from "./ex/Profile";

function click() {
  alert("클릭");
}

export default function App() {
  return (
    <>
      {/*1. **문자열을 `props`로 전달하기**
    `App` 컴포넌트에서 `Child` 컴포넌트로 `"Hello, World!"`라는 문자열을 전달하고, 
    `Child` 컴포넌트에서 이를 화면에 출력하시오. */}
      <Child
        message="Hello World!"
        num={42}
        array={["Apple", "Banana", "Cherry"]}
        obj={{ name: "Alice", age: 30 }}
        isLoggedin={false}
        click={click}
        uname={() => "bomin"}
        value={["text", "button", 3, 5]}
        text="Hello React!"
      />
      <Profile />
    </>
  );
}
