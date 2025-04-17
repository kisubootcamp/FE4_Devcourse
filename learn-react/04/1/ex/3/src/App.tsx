import LoginCard from "./components/LoginCard";
import SignupCard from "./components/SignupCard";

export default function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black gap-[32px]">
      <LoginCard />
      <SignupCard />
    </div>
  );
}
