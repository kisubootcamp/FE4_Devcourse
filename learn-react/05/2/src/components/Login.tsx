import { useRef, useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import Input from "./html/Input";

export default function Login() {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree || !email || !password) {
      alert("Please fill all the fields.");
      if (!email) {
        emailRef.current?.focus();
      } else if (!password) {
        pwRef.current?.focus();
      }
    } else {
      alert("Login Successfully");
    }
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form action="" className="grid gap-4" onSubmit={loginHandler}>
            <Input
              type="text"
              ref={emailRef}
              className="input-style"
              placeholder="someone@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              ref={pwRef}
              className="input-style"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Checkbox
              checked={agree}
              onChange={() => setAgree((agree) => !agree)}
            >
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
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
                Go To Sing up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
