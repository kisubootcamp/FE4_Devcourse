// import User from "./components/User";

// export default function App() {
//   const myFunction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, message: string) => {
//     alert(message);
//   };
//   const greet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     console.log(e);
//   };
//   return (
//     <>
//       <User
//         message="안녕하세요"
//         count={10}
//         isVisible={true}
//         tags={["react", "ts", "js"]}
//         user={{ id: 1, name: "sucoding" }}
//         myFunction={myFunction}
//         greet={greet}
//       />
//     </>
//   );
// }
{
  /* ------------------------------------------------------------------------------------------------------ */
}

// import Child from "./components/Child";

// export default function App() {
//   const myButton = () => {
//     console.log("click");
//   };

//   const style = { fontSize: "50px", color: "red" };

//   function Header() {
//     return <header>Header</header>;
//   }

//   function Content() {
//     return <main>Content</main>;
//   }

//   function Footer() {
//     return <footer>Footer</footer>;
//   }

//   return (
//     <>
//       <Child
//         message="Hello, World!"
//         count={42}
//         fruits={["Apple", "Banana", "Cherry"]}
//         user={{ name: "Alice", age: 30 }}
//         isLoggedIn={true}
//         myButton={myButton}
//         value="졸려"
//         style={style}
//         Header={<Header />}
//         Content={<Content />}
//         Footer={<Footer />}
//       />
//     </>
//   );
// }
{
  /* ------------------------------------------------------------------------------------------------------ */
}

// import ProfileCard from "./components/ProfileCard";

// export default function App() {
//   return (
//     <>
//       <ProfileCard
//         bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         uname="Sally Ramos"
//         instaId="@sallytheramos"
//         onClick={(name: string) => alert(name)}
//       />
//     </>
//   );
// }
{
  /* ------------------------------------------------------------------------------------------------------ */
}
import Button from "./components/Button";

export default function App() {
  return (
    <>
      <Button type="button">로그인</Button>
    </>
  );
}
