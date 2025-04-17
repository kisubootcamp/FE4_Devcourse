import User from "./components/User";

export default function App() {
  const myFunction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => {
    console.log(e);
    alert(message);
  };
  const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("hi");
  };
  return (
    <>
      <User
        message="안녕하세요"
        count={10}
        isVisible={true}
        tags={["react", "ts", "js"]}
        user={{ id: 1, name: "sucoding" }}
        myFunction={myFunction}
        greet={greet}
      />
    </>
  );
}
