import Login from "./components/Login";
import SignUp from "./components/Signup";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="flex gap-8 flex-col md:flex-row">
        <Login />
        <SignUp />
      </div>
    </div>
  );
}