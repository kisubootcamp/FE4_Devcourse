import MyComponent from "./components/MyComponent";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  const bgImg =
    "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const userImg =
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const username = "Sally Ramos";
  const instaID = "@sallytheramos";
  let isFollowing = false;
  const changeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
    e.currentTarget.style.backgroundColor = isFollowing ? "black" : "red";
    e.currentTarget.textContent = isFollowing ? "Follow" : "Unfollow";
    isFollowing = !isFollowing;
  };
  return (
    <>
      <ProfileCard
        bgImg={bgImg}
        userImg={userImg}
        username={username}
        instaID={instaID}
        changeColor={changeColor}
      />
      <MyComponent />
    </>
  );
}
