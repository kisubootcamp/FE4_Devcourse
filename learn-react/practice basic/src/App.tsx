import Child from "./components/Child";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";

function Header() {
  return <header>header</header>;
}

function Container() {
  return <main>Container</main>;
}

function Footer() {
  return <footer>Footer</footer>;
}

export default function App() {
  const Button = () => {
    console.log("Click");
  };
  const style = { fontSize: "50px", color: "red" };
  return (
    <>
      <Child
        String="Hello World!"
        Number={42}
        tags={{ name: "Alice", age: 30 }}
        Array={["apple", "banana", "Cherry"]}
        isLoggedin={true}
        Button={Button}
        value={"테스트"}
        style={style}
      />
      <Child2 />
      <Child3
        Header={<Header />}
        Container={<Container />}
        Footer={<Footer />}
      />
    </>
  );
}
