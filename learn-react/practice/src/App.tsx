// import Child from "./components/Child";
// import Child2 from "./components/Child2";
import Button from "./components/Button.tsx";
import ProfileCard from "./components/ProfileCard.tsx";

export default function App() {
  // function myFun() {
  //   console.log("버튼 클릭");
  // }

  // function Header() {
  //   return <header>Header</header>;
  // }
  // function Content() {
  //   return <main>Content</main>;
  // }
  // function Footer() {
  //   return <footer>Footer</footer>;
  // }

  return (
    <>
      {/* <Child
        message="Hello, World!"
        num={42}
        arr={["Apple", "Banana", "Cherry"]}
        obj1={{ age: 30 }}
        isLoggedIn={true}
        myFun={myFun}
        value="페이커"
        style={{ fontSize: "50px", color: "red" }}
      />
      <Child2 Header={<Header />} Content={<Content />} Footer={<Footer />} /> */}
      <ProfileCard
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        onClick={(name: string) => alert(name)}
      />
      <ProfileCard
        bg="https://cdn.pixabay.com/photo/2025/04/08/10/42/landscape-9521261_1280.jpg"
        userImg="https://cdn.pixabay.com/photo/2020/08/24/21/44/man-5515150_1280.jpg"
        uname="Bamos"
        instaId="@bamos"
        onClick={(name: string) => alert(name)}
      />
      <Button text="회원가입" />
    </>
  );
}
