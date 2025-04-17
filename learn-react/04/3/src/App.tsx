import Login from "./components/Login";
import Sign from "./components/Sign";

export default function App() {
  return (
    <div className='flex justify-center items-start gap-[110px] mt-20'>
      <Login />
      <Sign />
    </div>
  );
}
