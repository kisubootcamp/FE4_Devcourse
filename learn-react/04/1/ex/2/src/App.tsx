import ProfileCard from "./components/ProfileCard";
import "./css/style.css";

export default function App() {
  const handleClickFollowBtn = () => {
    alert("팔로우 완료");
  };
  return (
    <ProfileCard
      bjImg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      userName="Sally Ramos"
      instagramId="@sallytheramos"
      handleClickFollowBtn={handleClickFollowBtn}
    />
  );
}
