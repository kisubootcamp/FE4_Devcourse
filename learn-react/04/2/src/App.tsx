// import Child from "./Child";

// function Header() {
//   return <header>Header 영역입니다</header>;
// }

// function Content() {
//   return <main>Content 영역입니다</main>;
// }

// function Footer() {
//   return <footer>Footer 영역입니다</footer>;
// }
// export default function App() {
//   // const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   //   console.log("Clicked!");
//   // }; -> 매개변수 없으면 e.. 굳이...?
//   const onClick = () => {
//     console.log("Clicked!");
//   };
//   const style = {
//     fontSize: "50px",
//     color: "red",
//     name: "minji", // 이렇게 추가하면, name은 console에는 출력되지만, 타입에서는 무시된다 ! (css 가 아니라서)
//   };
//   // console.log(style);  → 근데 왜.. 두번 출력되지...???
//   return (
//     <>
//       <Child
//         greet='Hello, World!'
//         num={42}
//         fruits={["Apple", "Banana", "Cherry"]}
//         alice={{name: "Alice", age: 30}}
//         isLoggedIn={false}
//         onClick={onClick}
//         name2={"minji"}
//         value={["React", "TS", "JS"]}
//         style={style}
//         header={<Header />}
//         content={<Content />}
//         footer={<Footer />}
//       />
//     </>
//   );
// }

import Button from "./Components/Button";

export default function App() {
  return (
    <>
      {/* 컴포넌트도 시작, 종료 가능 */}
      <Button type='submit'>로그인</Button>
    </>
  );
}
