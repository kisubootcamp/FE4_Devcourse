import Login from "./components/Login";
import Sign from "./components/Sign";

export default function App() {
  return (
    <div className="bg-black flex justify-center items-center h-screen gap-[32px]">
      <Login />
      <Sign />
    </div>
  );
}
