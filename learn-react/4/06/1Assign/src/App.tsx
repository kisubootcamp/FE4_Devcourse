import Child from "./components/Child";

function Header() {
  return <header>header</header>;
}
function Content() {
  return <main>Content</main>;
}
function Footer() {
  return <footer>Footer</footer>;
}

export default function App() {
  const clickFunc = () => {
    console.log("클릭");
  };
  return (
    <>
      <Child
        greet="Hello, World!"
        num={42}
        fruits={["Apple", "Banan", "Cherry"]}
        info={{ name: "Alice", age: 30 }}
        isLoggedIn={true}
        clickFunc={clickFunc}
        value="안녕"
        style={{ fontSize: "50px", color: "red" }}
        Header={<Header />}
        Content={<Content />}
        Footer={<Footer />}
      />
    </>
  );
}
