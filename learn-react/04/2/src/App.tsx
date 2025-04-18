import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-start gap-20 mt-20">
        <Login />
        <SignUp />
      </div>
    </>
  );
}
