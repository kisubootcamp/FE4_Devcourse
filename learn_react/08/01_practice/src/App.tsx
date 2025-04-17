import Child from "./components/Child";
export default function App() {
  const clickEvent = () => {
    console.log("안녕?");
  };
  // 컴포넌트 생성하기
  return (
    <>
      <Child
        hello="Hello, World!"
        num={42}
        str={["Apple", "Banana", "Cherry"]}
        user={{ name: "Alice", age: 30 }}
        isLoggedIn={true}
        clickEvent={clickEvent}
        name={"박보검"}
        value={["1", "hi", 4]}
        style={{ fontSize: "50px", color: "red" }}
      />
    </>
  );
}
