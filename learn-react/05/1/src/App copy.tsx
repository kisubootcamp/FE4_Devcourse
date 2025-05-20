import User from "./components/User";

export default function App() {
  const user = {
    id: 1,
    name: "sucoding",
    age: 20,
  };

  return (
    <>
      {/* <User user={user} /> */}
      {/* <User id={user.id} name={user.name} age={user.age} /> */}
      <User {...user} clickHandler={() => alert("click")} />
    </>
  );
}
