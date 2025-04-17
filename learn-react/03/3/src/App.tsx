import ProfileCard from "./components/ProfileCard";

export default function App() {
  const followFunction = () => {
    alert("Followed!");
  };
  return (
    <>
      <ProfileCard
        bgImg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uName="Sally Ramos"
        instaId="@sallytheramos"
        follow={followFunction}
      />
    </>
  );
}
