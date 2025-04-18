// import User from "./components/User";

// export default function App() {
//   const myFunction = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
//     message: string
//   ) => {
//     alert(message);
//   };
//   const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(e);
//     console.log(e.nativeEvent);
//     // alert("greet!");
//   };

//   return (
//     <>
//       <User
//         message="안녕하세요"
//         count={10}
//         isVisible={true}
//         tags={["react", "ts", "js"]}
//         user={{ id: 1, name: "bin" }}
//         myFunction={myFunction}
//         greet={greet}
//       />
//     </>
//   );
// }

// 연습문제 - 개념 -------------------------------------------
// import Child from "./components/Child";

// function Header() {
//   return <header>Header</header>;
// }
// function Content() {
//   return <main>Content</main>;
// }
// function Footer() {
//   return <footer>Footer</footer>;
// }

// export default function App() {
//   const onClick = () => {
//     console.log("Click~!!");
//   };
//   const style = { fontSize: "50px", color: "red" };

//   return (
//     <>
//       <Child
//         str="Hello, World!"
//         num={42}
//         arr={["Apple", "Banana", "Cherry"]}
//         obj={{ name: "Alice", age: 30 }}
//         isLoggedIn={true}
//         onClick={onClick}
//         // name="bing"
//         value={[{ name: "bin" }]}
//         style={style}
//         Header={<Header />}
//         Content={<Content />}
//         Footer={<Footer />}
//       />
//     </>
//   );
// }

// 연습문제 - 디자인 ------------------------------------------
// import ProfileCard from "./components/ProfileCard";

// export default function App() {
//   const bgImg =
//     "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
//   const userImg =
//     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

//   const userName = "Sally Ramos";
//   const instaId = "@sallytheramos";

//   const followClick = (name: string) => {
//     alert(`${name} 팔로우 성공!`);
//   };

//   return (
//     <>
//       <ProfileCard
//         bgImg={bgImg}
//         userImg={userImg}
//         userName={userName}
//         instaId={instaId}
//         followClick={followClick}
//       />
//     </>
//   );
// }

// ----------------------------------------------------
import Button from "./components/Button";

function Text() {
  return <strong>Hello</strong>;
}

export default function App() {
  return (
    <>
      <Button>로그인</Button>
      <Button>
        <Text />
      </Button>
      <Button type="submit">
        <Text />
      </Button>
    </>
  );
}
