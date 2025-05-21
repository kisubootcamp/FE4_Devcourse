// import Button from "./components/HTML/Button";
// import Input from "./components/HTML/Input";
// import Sustagram from "./components/Sustagram";

// export default function App() {
//   return (
//     <>
//       <div className="item-middle ">
//         <Input
//           type="text"
//           className="rounded-lg border border-[#4f4f4f] text-sm px-4"
//           placeholder="text를 입력해주세요."
//         />
//         <Input type="password" className="input-style" />
//         <Input
//           type="number"
//           className="rounded-lg border border-[#4f4f4f] text-sm px-4"
//           disabled
//         />
//         <Input
//           type="checkbox"
//           className="rounded-lg border border-[#4f4f4f] text-sm px-4"
//         />
//         <Input
//           type="radio"
//           className="rounded-lg border border-[#4f4f4f] text-sm px-4"
//         />
//       </div>
//       {/* <Sustagram /> */}
//     </>
//   );
// }

// 반복 렌더링
// 반복문을 활용해서 반복 렌더링을 수행하는 기법
//[].map()
// 에서 반환하는 값으로 새로운 배열 발생
import User from "./components/User";
export default function App() {
  const items = ["apple", "banana", "orange", "orange"];
  const users = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Sucoding",
      age: 30,
    },
  ];
  return (
    <>
      <ul>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <ul>
        {items.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
// return (
//   <>
//     <ul>
//       {items.map((value) => (
//         <li key={index}>{value}</li>
//       ))}
//     </ul>
//   </>
// );
// }

// 반복 렌더링
// 반복문을 활용해서 반복 렌더링을 수행하는 기법
//for

// export default function App() {
//   const items = ["apple", "banana", "orange"];
//   const renderItems = [];
//   for (let i = 0; i < items.length; i++) {
//     renderItems.push(<li>{items[i]}</li>);
//   }
//   return (
//     <>
//       <ul>{renderItems}</ul>
//     </>
//   );
// }

//조건부 렌더링
// 조건에 따라서 컴포넌트를 렌더링하는 기법
// 1. if
// 2. 삼항연산자
// 3. 논리 && 연산자 - expre1 && expre2 => true
// 4.

// export default function App() {
//   const isLogin = false;
//   return (
//     <>
//       {(() => {
//         if (isLogin) {
//           return <h1>Login</h1>;
//         }
//         return <h1>LogOut!</h1>;
//       })()}
//     </>
//   );
// }

// export default function App() {
//   const isLogin = false;

//   return (
//     <>
//       {isLogin && <h1>User Is Login</h1>}
//       {!isLogin && <h1>User Is Not Login</h1>}
//     </>
//   );
// }
