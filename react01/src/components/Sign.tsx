export default function Sign() {
  return (
    <>
      <br />
      <div className="w-[375px] h-[495px] rounded-[8px] bg-white mb-[20px]">
        <h1 className="font-bold text-[20px] ml-[26px] pt-[30px] mb-[10px]">Sign Into App</h1>
        <div className="ml-[26px] mb-[20px]">Please enter your details to continue</div>
        <form className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Enter Your Name"
            className=" rounded-[8px] border border-inherit w-[325px] h-[44px] mb-[16px] flex flex-col justify-center items-center px-4 "
          />
        </form>
        <form className="flex flex-col justify-center items-center">
          <input
            type="email"
            placeholder="someone@example.com"
            className=" rounded-[8px] border border-inherit w-[325px] h-[44px] mb-[16px] flex flex-col justify-center items-center px-4 "
          />
        </form>
        <form className="flex flex-col justify-center items-center">
          <input
            type="password"
            placeholder="Enter Password"
            className=" rounded-[8px] border w-[325px] h-[44px] mb-[16px] flex flex-col justify-center items-center px-4"
          />
        </form>
        <form className="ml-[24px] mb-[32px]">
          <input type="checkbox" className="focus:bg-[#4f4f4f]" />
          <label htmlFor="html" className="ml-[8px] text-sm ">
            I agree with <strong>terms</strong> and <strong>policies.</strong>
          </label>
        </form>
        <div className="rounded-[8px] border w-[325px] h-[44px] bg-[#4f4f4f] flex justify-center items-center ml-[23px] mb-[16px] cursor-pointer">
          <span className="text-[#f5f5f5]">Sign In</span>
        </div>
        <div className=" rounded-[8px] border w-[325px] h-[44px] flex justify-center items-center ml-[23px] cursor-pointer">
          <span className="">Go To Log In</span>
        </div>
      </div>
    </>
  );
}
