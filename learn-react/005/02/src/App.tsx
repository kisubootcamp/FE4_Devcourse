import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-[10px] w-full">
        <Login />
        <Signup />
      </div>
    </>
  );
}
