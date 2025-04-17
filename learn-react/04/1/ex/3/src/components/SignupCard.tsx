export default function SignupCard() {
  return (
    <>
      <div className="border-[#D1D1D1] px-[25px] py-[40px] rounded-[8px] bg-[#ffffff]">
        <div className="flex flex-col justify-center gap-[10px] mb-[20px]">
          <p className="text-[20px] text-[#4F4F4F] font-bold">Sign Into App</p>
          <p className="text-[14px] text-[#4F4F4F]">
            Please enter your details to continue.
          </p>
        </div>
        <form className="flex flex-col gap-[16px]">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-[#4F4F4F] rounded-[8px] px-[16px] py-[14px] text-[#ACACAC] text-[14px]"
          />
          <input
            type="text"
            placeholder="someone@example.com"
            className="border border-[#4F4F4F] rounded-[8px] px-[16px] py-[14px] text-[#ACACAC] text-[14px]"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="border border-[#4F4F4F] rounded-[8px] px-[16px] py-[14px]  text-[#ACACAC] text-[14px]"
          />
          <div className="flex gap-[8px] items-center">
            <input
              type="checkbox"
              className="border border-[#4F4F4F]  accent-[#4F4F4F] w-[20px] h-[20px]"
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="text-[14px] text-[#4F4F4F]">
              I agree with <strong>terms</strong> and <strong>policies</strong>
            </label>
          </div>
          <button className="w-[325px] h-[44px] bg-[#4F4F4F] rounded-[8px] text-[#F5F5F5] text-sm mt-[16px]">
            Sign In
          </button>
        </form>
        <button className="w-[325px] h-[44px] bg-[#FFFFFF] rounded-[8px] text-[#4F4F4F] text-sm border border-[#4F4F4F] mt-[16px]">
          Go To Log In
        </button>
      </div>
    </>
  );
}
