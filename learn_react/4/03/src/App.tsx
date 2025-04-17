import BackImg from "./components/BackImg";
import FollowBtn from "./components/FollowBtn";
import ProfileImg from "./components/ProfileImg";
import UserInfo from "./components/UserInfo";

export default function App() {
  const btnClick = () => {
    console.log("isno_kr");
  };
  return (
    <>
      <article className="card">
        <BackImg />
        <div className="profile">
          <ProfileImg />
          <UserInfo />
          <FollowBtn onClick={btnClick} />
        </div>
      </article>
    </>
  );
}
