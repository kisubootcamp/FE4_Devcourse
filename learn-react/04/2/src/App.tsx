import Child from "./components/Child";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const onClick = () => {
    console.log("hello");
  };
  return (
    <>
      <Child
        message="Hello, World!"
        number={42}
        arr={["Apple", "Banana", "Cherry"]}
        info={{ name: "Alice", age: 30 }}
        isLoggedIn={true}
        onClick={onClick}
        value={["0", 1, 2]}
        style={{ fontSize: "50px", color: "red" }}
        header={<Header />}
        content={<Content />}
        footer={<Footer />}
      />
    </>
  );
}
