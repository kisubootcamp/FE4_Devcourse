// 조건부 렌더링
// 조건문을 활용해서 조건 렌더링을 수행하는 기법
// 1. if
// 2. 삼항 연산자
// 3. 논리 && 연산자
// 3.1 expr1 && expr2 -> true

// import Loggedin from "./components/Loggedin";
// import NotLoggedin from "./components/NotLoggedin";

export default function App() {
  const isLogin = true;

  // if (isLogin) {
  //   return <Loggedin />;
  // }

  // return <NotLoggedin />;

  // return (
  //   <>
  //     {isLogin ? (
  //       <Loggedin />
  //     ) : (
  //       <>
  //         <h1>User Is Not Login!</h1>
  //         <h1>User Is Not Login!</h1>
  //       </>
  //     )}
  //   </>
  // );

  return (
    <>
      {isLogin && <h1>User Is Login!</h1>}
      {!isLogin && <h1>User Is Not Login!</h1>}
    </>
  );
}
