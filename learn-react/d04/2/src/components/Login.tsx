export default function Login() {
  return (
    <>
      <div className="bg-white w-[375px] h-auto rounded-[8px] border border-solid border-[#D1D1D1] py-[40px] px-[25px]">
        <div>
          <h1 className="text-[#4F4F4F] text-[20px] font-bold mb-[13px]">
            Login Into App
          </h1>
          <p className="text-[#4F4F4F] text-[14px]">
            Please enter your details to continue.
          </p>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="someone@example.com"
              className="w-[325px] h-[44px] rounded-[8px] border border-solid border-[#4F4F4F] mt-[20px] mb-[16px] pl-[16px] text-[14px] placeholder:text-[#ACACAC]"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-[325px] h-[44px] rounded-[8px] border border-solid border-[#4F4F4F] mb-[16px] pl-[16px] text-[14px] placeholder:text-[#ACACAC]"
            />
            <div className="mb-[32px]">
              <input
                type="checkbox"
                name="checkbox"
                id=""
                className="mr-[8px] w-[20px] h-[20px] align-middle accent-[#4F4F4F] rounded-[8px] border border-solid border-[#4F4F4F]"
              />
              <span className="align-middle text-sm text-[#4F4F4F]">
                I agree with <span className="font-bold">terms</span> and{" "}
                <span className="font-bold">policies</span>.
              </span>
            </div>
          </div>
          <div>
            <button className="block w-[325px] h-[44px] rounded-[8px] bg-[#4F4F4F] mb-[16px] cursor-pointer">
              <span className="text-[#F5F5F5] text-[14px]">Log In</span>
            </button>
            <button className="block w-[325px] h-[44px] rounded-[8px] border border-solid border-[#4F4F4F] cursor-pointer">
              <span className="text-[#4F4F4F] text-[14px]">Go To Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
