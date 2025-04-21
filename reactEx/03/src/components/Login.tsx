import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);
  const pwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const [agree, setAgree] = useState(false);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("이메일을 입력해주세요.");
      emailRef.current?.focus();
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요.");
      pwRef.current?.focus();
      return;
    }
    alert("Login Successfully");
  };

  return (
    <>
      <br />
      <div className="w-[375px] h-[435px] rounded-lg bg-white m-0px">
        <h1 className="font-bold text-[20px]] ml-[26px] pt-[30px] mb-[10px]">Login Into App</h1>
        <div className="ml-[26px] mb-[20px]">Please enter your details to continue</div>
        <form onSubmit={submitHandler}>
          <Input
            type="text"
            ref={emailRef}
            className="input-style"
            placeholder="someone@example.com"
            value={email}
            onChange={emailChangeHandler}
          />
          <Input
            type="password"
            ref={pwRef}
            className="input-style"
            placeholder="Enter Password"
            value={pw}
            onChange={pwChangeHandler}
          />
          <div className="ml-6 mb-8 flex items-center">
            <input
              type="checkbox"
              className="focus:bg-[#4f4f4f]"
              checked={agree}
              onChange={() => setAgree((agree) => !agree)}
            />
            <span className="text-sm color-[#4f4f4f] pl-2">
              I agree with <em className="not-italic font-bold">terms</em> and{" "}
              <em className="not-italic font-bold">policies</em>.
            </span>
          </div>
          <Button type="submit" className="text-[#f5f5f5]">
            Log In
          </Button>
          <Button type="button" className="bg-white">
            Go To Sign up
          </Button>
        </form>
      </div>
    </>
  );
}
