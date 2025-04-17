// import User from "./components/User";
// import Content from "./components/Content";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ProfileCard from "./components/ProfileCard";
// import ChildProps from "./components/ChildProps";
import Button from "./components/Button";
// import { useState } from "react";

export default function App() {
  // const myFunction = (
  //   e: React.MouseEvent<HTMLButtonElement>,
  //   message: string
  // ) => {
  //   alert(message);
  //   console.log(e);
  //   console.log(e.nativeEvent);
  // };

  // // 모든 내용을 한 페이지에 보이기는 애매해서 조건으로 스위칭 가능하게 조정
  // const [profile, setProfile] = useState(true);

  // // 프로필 카드 필요 변수
  // const userImg =
  //   "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  // const backgroundImg =
  //   "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  // const username = "Sally Ramos";
  // const instargram = "@sallytheramos";
  // const handleClickFollow = () => {
  //   console.log("팔로우 버튼 클릭");
  //   window.open("https://www.instagram.com", "_blank");
  // };

  return (
    <>
      {/* {profile && (
        <main>
          <User
            message="안녕하세요?"
            count={10}
            isVisible={true}
            tags={["react", "ts", "js"]}
            user={{ id: 1, name: "PSY" }}
            handleClick={myFunction}
            setProfile={setProfile}
            profile={profile}
          />
          <ChildProps
            header={<Header />}
            content={
              <Content
                stringProps="Hello, World!"
                numberProps={42}
                arrayProps={["Apple", "Banana", "Cherry"]}
                objectProps={{ name: "Alice", age: 30 }}
                isLoggedIn={true}
                funcProps={myFunction}
                value={10}
                styleProps={{ fontSize: "50px", color: "red" }}
              />
            }
            footer={<Footer />}
          />
        </main>
      )}
      <hr />
      {!profile && (
        <ProfileCard
          userImg={userImg}
          backgroundImg={backgroundImg}
          username={username}
          instargram={instargram}
          handleClickFollow={handleClickFollow}
        />
      )} */}
      <Button>
        <span>Login</span>
      </Button>
    </>
  );
}
