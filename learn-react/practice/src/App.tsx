import User from "./components/User";

export default function App() {
  const follow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
    alert("팔로우하였습니다");
  };

  return (
    <>
      <User
        name="Sally Ramos"
        username="@sallytheramos"
        profImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        cardImg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        follow={follow}
      />
    </>
  );
}
