import User from "./components/User";
import Event from "./components/Event";
import Button from "./components/Button";
export default function App() {
  const myFunction = (message: string) => {
    alert(message);
  };
  //const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
  const greet = () => {
    //console.log(e);
    alert("방가");
  };
  return (
    <>
      <User
        message="안녕"
        count={10}
        isVisible={true}
        tags={["React", "ts", "js"]}
        user={{ id: 1, name: "jiyu" }}
        myFunction={myFunction}
        greet={greet}
      />
      <Event />
      {/* 컴포넌트에 콘텐츠를 전달하는 방식 */}
      <Button>로그인</Button>
    </>
  );
}
