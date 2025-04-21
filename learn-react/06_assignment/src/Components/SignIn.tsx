//import "../css/Login.css";

import Button from "./html/Button";
import CheckBox from "./html/CheckBox";
import Input from "./html/Input";

export default function SignIn() {
  return (
    <>
      <div className="w-[375px] bg-white rounded-lg p-8 flex flex-col gap-4 shadow-md">
        <h1 className="font-bold text-[28px] text-[#4f4f4f] ">Sign Into App</h1>
        <p className="text-[14px] text-[#4f4f4f]">
          Please enter your details to continue.
        </p>
        <Input
          type="text"
          placeholder="Enter Your Name"
          className="input-style"
        />
        <Input
          type="text"
          placeholder="someone@example.com"
          className="input-style"
        />
        <Input
          type="password"
          placeholder="Enter Password"
          className="input-style"
        />
        <CheckBox>
          <span className="text-sm color-[#4f4f4f]">
            {" "}
            I agree with <b>terms</b> and <b>policies</b>.
          </span>
        </CheckBox>
        <Button className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg">
          Log In
        </Button>
        <Button className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg">
          Go To Log In
        </Button>
      </div>
    </>
  );
}
