// import User from "./components/User";

// export default function App() {
//   const myFunction3 = (
//     e: React.MouseEvent<HTMLButtonElement>,
//     message: string
//   ) => {
//     alert(message);
//   };
//   const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(e);
//     // alert("greet");
//   };

//   return (
//     <>
//       <User
//         message="안녕하세요"
//         count={10}
//         isVisible={true}
//         tags={["react", "ts", "js"]}
//         user={{ id: 1, name: "kyo" }}
//         myFunction3={myFunction3}
//         greet={greet}
//       />
//     </>
//   );
// }

// /* Child */
// import Child from "./components/Child";

// function Header() {
//   return <header>Header</header>;
// }
// function Content() {
//   return <main>Content</main>;
// }
// function Footer() {
//   return <footer>Footer </footer>;
// }

// export default function App() {
//   const style = { fontSize: "50px", color: "red" };

//   return (
//     <>
//       <Child
//         message="Hello, World!"
//         num={42}
//         arr={["Apple", "Banana", "Cherry"]}
//         user={{ name: "Alice", age: 30 }}
//         isLoggedIn={true}
//         value={["a", "b", "c"]}
//         style={style}
//         Header={<Header />}
//         Content={<Content />}
//         Footer={<Footer />}
//       />
//     </>
//   );
// }

// /* ProfileCard */
// import ProfileCard from "./components/ProfileCard";

// export default function App () {
//   return (
//     <>
//       <ProfileCard
//         bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         uname="Sally Ramos"
//         instaId="@sallytheramos"
//         onClick={() => alert("Follow")}
//       />
//     </>
//   );
// }

/* Button */
import Button from "./components/Button";

function Text() {
  return <strong>Hello</strong>;
}

export default function App() {
  return (
    <>
      <Button type="submit">
        <Text />
      </Button>
    </>
  );
}
