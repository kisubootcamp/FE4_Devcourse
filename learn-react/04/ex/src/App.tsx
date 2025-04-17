import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  const boxStyle =
    "bg-white w-[375px] rounded-[8px] border-[#D1D1D1] border-[1px] px-[25px] py-[40px]";

  const inputStyle =
    "border-[#4F4F4F] border-[1px] px-[16px] h-[44px] rounded-[8px] w-[100%]";

  return (
    <div className="h-[100vh] flex gap-[40px] justify-center items-center content-center">
      <Login boxStyle={boxStyle} inputStyle={inputStyle} />
      <Signup boxStyle={boxStyle} inputStyle={inputStyle} />
    </div>
  );
}
