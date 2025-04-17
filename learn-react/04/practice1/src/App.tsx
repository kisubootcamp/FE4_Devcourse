import Child from "./components/Child";
import ProfileCard from "./components/ProfileCard";

function Header() {
  return <header>Header</header>;
}
function Content() {
  return <main>Content</main>;
}
function Footer() {
  return <footer>Footer</footer>;
}

export default function App() {
  const clickEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("클릭이벤트 발생", e);
  };
  return (
    <>
      {/* 1 */}
      <Child
        message="Hello, World!"
        score={42}
        fruits={["Apple", "Banana", "Cherry"]}
        user={{ name: "Alice", age: 30 }}
        isLoggedIn={true}
        clickEvent={(e) => {
          clickEvent(e);
        }}
        value={["a", "b"]}
        styles={{ fontSize: "50px", color: "red" }}
        Header={<Header></Header>}
        Content={<Content></Content>}
        Footer={<Footer></Footer>}
      ></Child>

      <ProfileCard
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallyramos"
        onClick={(name: string) => alert(name)}
      ></ProfileCard>
      <ProfileCard
        bg="https://cdn.pixabay.com/photo/2025/03/18/17/03/dog-9478487_960_720.jpg"
        userImg="https://cdn.pixabay.com/photo/2022/07/31/21/27/little-boy-7356918_960_720.jpg"
        uname="Chroa"
        instaId="@chora"
        onClick={(name: string) => alert(name)}
      ></ProfileCard>
    </>
  );
}
