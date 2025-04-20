import Login from "./Components/Login";
import SignIn from "./Components/SignIn";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center gap-8 bg-neutral-500">
        <Login />
        <SignIn />
      </div>
    </>
  );
}
