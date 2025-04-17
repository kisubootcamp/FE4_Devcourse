export default function Login() {
  return (
    <>
      <br />
      <div className="w-[375px] h-[435px] rounded-[8px] bg-white m-0px">
        <h1 className="font-bold text-[20px] ml-[26px] pt-[30px] mb-[10px]">Login Into App</h1>
        <div className="ml-[26px] mb-[20px]">Please enter your details to continue</div>
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
          <input type="checkbox" className="checked:!bg-[#4f4f4f] checked:border-[#4f4f4f]" />
          <label htmlFor="html" className="ml-[8px] text-sm ">
            <span>
              I agree with <strong>terms</strong> and <strong>policies.</strong>
            </span>
          </label>
        </form>
        <div className="rounded-[8px] border w-[325px] h-[44px] bg-[#4f4f4f] flex justify-center items-center ml-[23px] mb-[16px] cursor-pointer">
          <span className="text-[#f5f5f5]">Log In</span>
        </div>
        <div className=" rounded-[8px] border w-[325px] h-[44px] flex justify-center items-center ml-[23px] cursor-pointer">
          <span className="">Go To Sign Up</span>
        </div>
      </div>
    </>
  );
}
