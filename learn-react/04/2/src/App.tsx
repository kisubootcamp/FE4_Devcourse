// import Login from "./components/Login";
import SignIn from "./components/SignIn";
// export default function App() {
//   const onLogIn = () => {
//     alert("log in");
//   };
//   const onGoToSignUp = () => {
//     alert("sign up");
//   };
//   return (
//     <>
//       <Login onLogIn={onLogIn} onGoToSignUp={onGoToSignUp} />
//     </>
//   );
// }
export default function App() {
  const onSignIn = () => {
    alert("sign in");
  };
  const onGoToLogIn = () => {
    alert("go to log in");
  };
  return (
    <>
      <SignIn onSignIn={onSignIn} onGoToLogIn={onGoToLogIn} />
    </>
  );
}
