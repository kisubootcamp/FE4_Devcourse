import ProfileCard from "./components/ProfileCard";

export default function App3() {
  return (
    <>
      <ProfileCard
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        // onClick={() => alert("Follow")}
        onClick={(name: string) => alert(name)}
      />
    </>
  );
}
