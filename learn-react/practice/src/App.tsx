import Button from "./components/Button";
import User from "./components/User";
import Span from "./components/span";

export default function App() {
  // const follow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(e);
  //   alert("팔로우하였습니다");
  // };

  return (
    <>
      <User
        name="Sally Ramos"
        username="@sallytheramos"
        profImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        cardImg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        follow={(name: string) => {
          alert(name);
        }}
      />
      <User
        name="Jane Doe"
        username="@Rat"
        profImg="https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359472_1280.jpg"
        cardImg="https://cdn.pixabay.com/photo/2023/04/19/19/11/lake-7938396_1280.jpg"
        follow={(name: string) => {
          alert(name);
        }}
      />
      <Button>로그인</Button>
      <Button>네이버</Button>
      <Button>다음</Button>
      <Button>구글</Button>
      <Button>123</Button>
      <Button>[1, 2, 3, 4]</Button>
      <Span>로긴</Span>
    </>
  );
}
