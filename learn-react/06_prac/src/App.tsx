import User from "./components/User";

export default function App() {
  const question1 = "Hello, World!";
  const question2 = 42;
  const question3 = ["Apple", "Banana", "Cherry"];
  const question4 = { name: "Alice", age: 30 };
  const question5 = true;

  const question6 = () => {
    console.log("click ! 🚀");
  };

  //const quesiton7 = "은서";
  const question81 = [1, 2, 3, 4, 5];
  const question9 = {
    fontsize: 50,
    color: "red",
  };

  const Question100 = () => {
    return <header>header</header>;
  };
  const Question101 = () => {
    return <main>header</main>;
  };
  const Question102 = () => {
    return <footer>header</footer>;
  };

  return (
    <>
      <h1 className="text-3xl underline">App Component</h1>
      <User
        message={question1}
        num={question2}
        arr={question3}
        obj={question4}
        isLoggedIn={question5}
        onClick={question6}
        name="은서"
        value={question81}
        style={question9}
        Header={Question100}
        Content={Question101}
        Footer={Question102}
      />
    </>
  );
}
