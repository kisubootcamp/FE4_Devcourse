import { useRef, useState } from "react";

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
    e.preventDefault(); // 불필요한 전송막기
    if (!email || !pw || !agree) {
      alert("Please fill all the fields");
      return;
    }
    alert("Login good");
  };

  return (
    <>
      <div className="pt-[40px] pr-[20px] pb-[40px] pl-[20px] border border-[#D1D1D1] rounded-[8px] w-[375px] bg-white">
        <div>
          <h2 className="text-[20px] text-[#4F4F4F] font-bold mb-[10px]">
            Login Into App
          </h2>
          <p className="text-[14px] text-[#4F4F4F]">
            Please enter your details to continue.
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-[16px] mb-[32px] mt-[20px]">
            <input
              className="border pt-[13px] pr-[16px] pb-[13px] pl-[16px] rounded-lg"
              type="email"
              placeholder="someone@exapmle.com"
              value={email}
              onChange={emailChangeHandler}
              ref={emailRef}
            />
            <input
              className="border pt-[13px] pr-[16px] pb-[13px] pl-[16px] rounded-lg"
              type="password"
              placeholder="Enter Password"
              value={pw}
              onChange={pwChangeHandler}
              ref={pwRef}
            />
            {agree.toString()}
            <div className="text-[14px] text-[#4F4F4F] flex gap-[8px]">
              <input
                type="checkbox"
                className="size-[20px] rounded-[5px]"
                checked={agree}
                onChange={() => setAgree((agree) => !agree)}
              />{" "}
              <p>
                I agree with <span className="font-bold">terms</span> and{" "}
                <span className="font-bold">policies.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <button className="font-medium text-[14px] text-[#F5F5F5] w-full h-[44px] bg-[#4f4f4f] rounded-lg cursor-pointer">
              Log In
            </button>
            <button className="font-medium text-[14px] text-[#4f4f4f] w-full h-[44px] bg-[#F5F5F5] rounded-lg cursor-pointer border border-[#4f4f4f]">
              Go To Sing Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
