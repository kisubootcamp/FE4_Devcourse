import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <>
      <ProfileCard
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        onClick={(name: string) => alert(`${name} Follow!`)}
      />
      <ProfileCard
        bg="https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359472_1280.jpg"
        userImg="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
        uname="Vincent"
        instaId="@company12"
        onClick={(name: string) => alert(`${name} Follow!`)}
      />
    </>
  );
}
