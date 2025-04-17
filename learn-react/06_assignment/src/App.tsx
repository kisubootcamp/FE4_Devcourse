import Login from "./Components/Login";
import SignIn from "./Components/SignIn";

export default function App() {
  const email = "pes1149@naver.com";
  const password = "pes1149";
  const agree = true;

  const name = "eunseo";

  return (
    <>
      <div className="min-h-screen flex justify-center items-center gap-8 bg-neutral-500">
        <Login email={email} password={password} agree={agree} />
        <SignIn name={name} email={email} password={password} agree={agree} />
      </div>
    </>
  );
}
