import { useState } from "react";
import Checkbox from "./html/Checkbox";
import Input from "./html/Input";
import Button from "./html/Button";

export default function Login() {
  const [agree, setAgree] = useState(false);

  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] bg-[#FFFFFF] px-[25px] py-[40px] border-[#D1D1D1] border-[1px] rounded-lg grid gap-y-[20px] text-[#4F4F4F]">
          <div className="w-[325px] h-[58px] grid gap-y-[10px]">
            <h1 className="font-bold text-xl">Login Into App</h1>
            <p className="text-sm">Please enter your details to continue.</p>
          </div>

          <form className="w-[325px] h-[276px] grid gap-[32px]">
            <div className={`w-[325px] h-[140px] grid gap-[16px]`}>
              <Input
                className="input-style"
                type="email"
                placeholder="someone@example.com"
              />
              <Input
                className="input-style"
                type="password"
                placeholder="Enter Password"
              />
              <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
                <span className="text-sm text-[#4f4f4f]">
                  I agree with <em className="not-italic font-bold">terms</em>{" "}
                  and <em className="not-italic font-bold">policies</em>.
                </span>
              </Checkbox>
            </div>

            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                Log In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
              >
                Go To Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
