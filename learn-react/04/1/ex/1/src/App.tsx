import Child from "./components/Child";

export default function App() {
  const handleClick = (): void => {
    console.log("클릭됨");
  };

  const style = {
    fontSize: "50px",
    color: "red",
  };
  return (
    <>
      <Child
        str="Hello, World!"
        num={42}
        arr={["Apple", "Banana", "Cherry"]}
        obj={{ name: "Alice", age: 30 }}
        isLoggedIn={false}
        handleClick={handleClick}
        name="박준규"
        value={28}
        style={style}
        Header={<Header/>}
        Content={<Content/>}
        Footer={<Footer/>}
      />
    </>
  );
}

function Header() {
  return <h1>Header</h1>;
}

function Content() {
  return <h1>Content</h1>;
}
function Footer() {
  return <h1>Footer</h1>;
}
