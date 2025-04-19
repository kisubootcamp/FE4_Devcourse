//import User from "./components/User";
// export default function App() {
//   const user = {
//     id: 1,
//     name: "sucoding",
//     age: 20,
//   };
//   return (
//     <>
//       {/* <User user={user}/> */}
//       {/* <User id={user.id} name={user.name} age={user.age} /> */}
//       <User {...user} clickHandler={() => alert("click")} />
//       {/* 객체에서만 사용가능, 위코드와 동일일 */}
//     </>
//   );
// }

//조건부 렌더링
//조건에 따라서 컴포넌트를 렌더링하는 기법
//import LoggedIn from "./components/LoggedIn";
//import NotLoggedIn from "./components/NotLoggedIn";

//1. if => jsx 내부에서는 사용불가
// export default function App() {
//   const isLogin = true;
//   if (isLogin) {
//     return <LoggedIn />;
//   }
//   return <NotLoggedIn />;
// }

//2.삼항연산자(제일불필요)
// export default function App() {
//   const isLogin = false;
//   return <>{isLogin ? <LoggedIn /> : <h1>User is Not Login!</h1>}</>;
// }

//3. 논리&&연산자
//3.1 expr1 && expr2 앞의 연산이 맞으면 뒤의 연산을 처리해주세요
// export default function App() {
//   const isLogin = false;
//   return (
//     <>
//       {isLogin && <h1>User Is Login!</h1>}
//       {!isLogin && <h1>User Is Not Login!</h1>}
//       {/* 이런 패턴을 사용해 본적이 없다.(즉시실행 함수에서는 안에서 if문 사용가능) */}
//       {(() => {
//         if (isLogin) {
//           return <h1>Login!</h1>;
//         }
//         return <h1>Logout!</h1>;
//       })()}
//     </>
//   );
// }

//반복 렌더링
//반복문을 활용해서 반복 렌더링을 수행하는 기법
//map() 으로 반복문 실행시킴 [].map()
// export default function App() {
//   const renderItems = [];
//   const items = ["apple", "banana", "orange"];
//   for (let i = 0; i < items.length; i++) {
//     renderItems.push(<li>{items[i]}</li>);
//   }
//   return (
//     <>
//       <ul>{renderItems}</ul>
//     </>
//   );
//}

//key 속성의 값을 유니크하게 해줘야함
// import User from "./components/User";
// export default function App() {
//   const items = ["apple", "banana", "orange", "orange"];
//   const users = [
//     {
//       id: 1,
//       name: "John",
//       age: 20,
//     },
//     {
//       id: 2,
//       name: "Sucoding",
//       age: 30,
//     },
//   ];
//   return (
//     <>
//       <ul>
//         {users.map((user) => (
//           //key가 user 컴포넌트에 전달되지 않음
//           <User key={user.id} {...user}/>
//         ))}
//       </ul>
//       <ul>
//         {items.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
//되도록이면 key값으로 index 넣지 말것=>배열 내 요소 추가시 index가 뒤로 밀려버림
// import Button from "./components/html/Button";

// export default function App() {
//   return (
//     <>
//       <div className="flex flex-col items-center gap-4 justify-center min-h-screen ">
//         <Button type="button" className="bg-[#4f4f4f]">Add</Button>
//         <Button type="submit" className="bg-[#ed4848]">Cancel</Button>
//         <Button type="reset"className="bg-[#7D48ED]" disabled>Success</Button>
//       </div>
//     </>
//   );
// }

//input.tsx
import Input from "./components/html/Input";
export default function App() {
  return (
    <>
      <div className="">
        <Input type="text" className="input-style" />
        <Input type="password" className="input-style" />
        <Input type="number" className="input-style" disabled />
        <Input className="input-style" disabled />
        {/* checkbox,radio 버튼 저장된 값이 너무 큼=>커스터마이징해서 사용하기위해제외시키기 */}
      </div>
    </>
  );
}
