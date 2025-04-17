import Child from "./components/Child";

export default function App() {
  const buttonClick = () => {
    console.log("버튼 클릭");
  };
  return (
    <>
      <Child
        str="Hello, World!"
        num={42}
        arr={["Apple", "Banana", "Cherry"]}
        obj={{ name: "Alice", age: 30 }}
        isLoggedIn={true}
        buttonClick={buttonClick}
        name=""
        value="value"
        style={{ fontSize: "50px", color: "red" }}
      />
    </>
  );
}
