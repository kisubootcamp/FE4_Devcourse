import ProfileCard from "./components/ProfileCard";

export default function App3() {
  return (
    <>
      <ProfileCard
        backgroundImg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Sally Ramos"
        name="@sallytheramos"
        onFollow={(name: string) => alert(`${name} Follow!`)}
      />
      <ProfileCard
        backgroundImg="https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359472_1280.jpg"
        profileImg="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
        username="Vincent"
        name="@company12"
        onFollow={(name: string) => alert(`${name} Follow!`)}
      />
    </>
  );
}
