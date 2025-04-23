import User from "./components/User.tsx";

// import LoggedIn from "./components/LoggedIn";
// import NotLoggedIn from "./components/Not LoggedIn";

// export default function App() {
//   const user = {
//     id: 1,
//     name: "seoll",
//     age: 20,
//   };
//   return (
//     <>
//       {/* <User user=(user) /> */}
//       {/* <User id={user.id} name={user.name} age={user.age} /> */}
//       <User {...user} clickHandler={() => alert("click")} />
//       {/* 객체 데이터에만 쓸 수 있는 방법. 속성과 값이 명확하기 때문 */}
//     </>
//   );
// }

// export default function App() {
//   const isLogin = false;

//   return;
//   <>{isLogin ? <h1>User Is Login!</h1> : <h1>User Is Not Login!</h1>}</>;
// }

// 조건부 렌더링
// 조건에 따라서 컴포넌트를 렌더링하는 기법
// if
//삼항 연산자
// 논리 && 연산자
// expr1 && expr2 -> true

// export default function App() {
//   const isLogin = false;
//   return (
//     <>
//       {isLogin && <h1>User Is LogIn!</h1>}
//       {!isLogin && <h1>User Is Not Login!</h1>}
//     </>
//   );

//   {
//     {(() => {
//       if (isLogin) {
//         return <h1>Login</h1>;
//       }
//       return <h1>Logout</h1>;
//     )()};}
//   }

// 반복 렌더링
// 반복문을 활용해서 반복 렌더링을 수행하는 기법
// [].map()
// key 속성 값을 유니크하게 해줘야 함
// export default function App() {
//   // const renderItems = [];
//   const items = ["apple", "banana", "orange"];
//   const users = [
//     {
//       id: 1,
//       name: "lee",
//       gae: 20,
//     },
//   ];
// for (let i = 0; i < items.length; i++) {
//   renderItems.push(<li>{items[i]}</li>);
// }
//   return (
//     <>
//       {/* <ul>{renderItems}</ul> */}
//       <ul>
//         {items.map((value, index) => (
//           <li key={index}>
//           {value}
//           </li>
//         ))}
//       </ul>
//       <ul>
//         {users.map((user) => {
//           <User key = (user.id) {...user}/>
//         })}
//       </ul>
//     </>
//   );
// }
export default function App() {
  return (
    <>
      <User />;
    </>
  );
}
