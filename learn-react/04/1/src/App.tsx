import User from "./components/User";

export default function App() {
  const myFunction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    message: string
  ) => {
    alert(message);
  };
  const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(e.nativeEvent);
  };
  return (
    <>
      <h1 className="text-3xl underline">App Component</h1>
      <User
        message="안녕"
        count={10}
        isVisible={true}
        tags={["react", "ts", "js"]}
        user={{ id: 1, name: "ji" }}
        myFunction={myFunction}
        greet={greet}
      />
    </>
  );
}
