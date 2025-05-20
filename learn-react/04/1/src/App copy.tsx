// import Child from "./components/Child";
// import ProfileCard from "./components/ProfileCard";
// import User from "./components/User";

import Button from "./components/Button";

function Text() {
  return <strong>Hello</strong>;
}

export default function App() {
  // const myFunction = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   message: string
  // ) => {
  //   alert(message);
  // };
  // const greet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(e);
  //   console.log(e.nativeEvent);
  //   // alert("greet");
  // };

  // const myFunc = () => {
  //   alert("message");
  // };

  // const style = { fontSize: "50px", color: "red" };

  // const Header = () => <header>Header</header>;
  // const Content = () => <main>Content</main>;
  // const Footer = () => <footer>Footer</footer>;

  return (
    <>
      {/* <User
        message="안녕하세요"
        count={10}
        isVisible={true}
        tags={["react", "ts", "js"]}
        user={{ id: 1, name: "sucoding" }}
        myFunction={myFunction}
        greet={greet}
      /> */}

      {/* <Child
        greet="Hello, World!"
        num={42}
        fruits={["Apple", "Banana", "Cherry"]}
        person={{ name: "Alice", age: 30 }}
        isLoggedIn={true}
        onClick={myFunc}
        name="sucoding"
        value="I'm value"
        style={style}
        header={<Header />}
        content={<Content />}
        footer={<Footer />}
      /> */}

      {/* <ProfileCard
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        onClick={(name: string) => alert(name)}
      />
      <ProfileCard
        bg="https://cdn.pixabay.com/photo/2024/03/11/15/25/trees-8626959_1280.jpg"
        userImg="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
        uname="Sally Ramos2"
        instaId="@sallytheramos"
        onClick={(name: string) => alert(name)}
      /> */}

      {/* <Button text="로그인" /> */}
      <Button type="submit">
        {/* <h1>로그인</h1>
        <h2>로그아웃</h2> */}
        <Text />
      </Button>
    </>
  );
}
