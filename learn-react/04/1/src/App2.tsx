import Child from "./components/Child";

function Header() {
  return <header>Header</header>;
}
function Content() {
  return <div>Content</div>;
}
function Footer() {
  return <footer>Footer</footer>;
}

export default function App2() {
  const myButton = () => {
    console.log("클릭");
  };
  const style = { fontSize: "50px", color: "red" };
  return (
    <>
      <Child
        message="Hello, World!"
        count={42}
        fruits={["Apple", "Banana", "Cherry"]}
        user={{ name: "Alice", age: 30 }}
        isLoggedIn={true}
        myButton={myButton}
        name="야호"
        value={[1, 2]}
        style={style}
        Header={<Header />}
        Content={<Content />}
        Footer={<Footer />}
      />
    </>
  );
}
