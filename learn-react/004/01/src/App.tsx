// import User from "./components/User";

import Button from "./components/Button";

export default function App() {
  function Text() {
    return <strong>Button</strong>;
  }
  // const myFunction = (msg: string) => {
  //   alert(msg);
  // };
  // const greet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(e);
  //   console.log(e.nativeEvent);
  // };
  return (
    <>
      {/* <User
        msg="안녕하세요"
        cnt={10}
        isVisible={true}
        tags={["react", "ts", "js"]}
        user={{ id: 1, name: "jaegeon" }}
        myFunction={myFunction}
        greet={greet}
      /> */}
      <Button>
        <Text />
      </Button>
    </>
  );
}
