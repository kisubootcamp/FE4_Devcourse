export default function Login() {
  return (
    <>
      {/*  absolute left-[50%] top-[50%] translate-[-50%] */}
      <div className="w-[375px] h-auto mx-auto my-[50px] rounded-lg py-[40px] px-[25px] bg-white box-border">
        <div className="mb-[22px]">
          <h1 className="text-[20px] text-zinc-800 font-bold mb-[10px]">
            Login Into App
          </h1>
          <p className="text-[14px] text-zinc-800">
            Please enter your details to continue.
          </p>
        </div>
        <div className=" mb-[32px]">
          <input
            type="email"
            placeholder="someone@example.com"
            className="w-full h-[44px] px-[16px] box-border border-1 border-solid border-zinc-800 rounded-[8px] mb-[16px] placeholder:text-[14px] placeholder:text-[#ACACAC]"
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full h-[44px] px-[16px] box-border border-1 border-solid border-zinc-800 rounded-[8px] mb-[16px] placeholder:text-[14px] placeholder:text-[#ACACAC]"
          ></input>
          <input
            id="agree"
            type="checkbox"
            className="w-[1px] h-[1px] absolute overflow-hidden ml-[-1px]"
            style={{
              clipPath: "rect(0,0,0,0)",
            }}
          />
          <label
            htmlFor="agree"
            className="inline-block h-[20px] font-light text-[14px] bg-no-repeat bg-top-left pl-[30px] cursor-pointer"
          >
            I agree with <span className="font-medium">terms</span> and{" "}
            <span className="font-medium">policies</span>
          </label>
        </div>
        <div>
          <button className="w-full h-[44px] text-[14px] text-center text-white bg-zinc-700 rounded-[8px] mb-[16px]">
            Log In
          </button>
          <button className="w-full h-[44px] text-[14px] text-center text-zinc-800 bg-white border-1 border-solid border-zinc-800 rounded-[8px]">
            Go To Sing up
          </button>
        </div>
      </div>
    </>
  );
}
